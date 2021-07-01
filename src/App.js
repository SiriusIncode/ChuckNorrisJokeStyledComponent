import "./styles.css";
import { useEffect, useState } from "react";
import Comments from "./Components/Comments";
import Button from "./styledComponents/Button";
import Input, { Textarea } from "./styledComponents/Input";
import Wrapper, {
  JokeWrapper,
  ButtonsWrapper,
} from "./styledComponents/Wrapper";
import Avatar from "./styledComponents/Avatar";
import generateRandomColor from "./helpers";
import { setComment } from "./reducers/commentReducer";
import { setName } from "./reducers/nameReducer";
import { useDispatch, useSelector } from "react-redux";
import { getJoke } from "./reducers/jokeReducer";
import { addComment, getComments } from "./reducers/commentsReducer";
import { nanoid } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import statuses from "./statuses";

export default function App() {
  const joke = useSelector((state) => state.joke.value);
  const jokeError = useSelector((state) => state.joke.error);
  const commentError = useSelector((state) => state.comments.error);
  const comments = useSelector((state) => state.comments.value);
  const comment = useSelector((state) => state.comment.value);
  const name = useSelector((state) => state.name.value);
  const jokeStatus = useSelector((state) => state.joke.status);
  const commentsStatus = useSelector((state) => state.comments.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJoke());
    dispatch(getComments());
  }, []);

  const sendComment = () => {
    dispatch(addComment({time: (new Date()).toString(), comment, name}))
    dispatch(setName(""));
    dispatch(setComment(""));
  };

  const resetInputs = () => {
    dispatch(setName(""));
    dispatch(setComment(""));
  };

  if (jokeError || commentError) {
    return (
      <ButtonsWrapper>
        <ToastContainer />
        {jokeError ? (
          <Button
            secondary
            onClick={() => {
              dispatch(getJoke());
            }}
          >
            load joke again
          </Button>
        ) : null}
        {commentError ? (
          <Button
            secondary
            onClick={() => {
              dispatch(getComments());
            }}
          >
            load comments again
          </Button>
        ) : null}
      </ButtonsWrapper>
    );
  }

  if (jokeStatus === statuses.loading || commentsStatus === statuses.loading)
    return (
      <div className="loaderWreapper">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  return (
    <div className="App">
      <h1>Chuck Norris Joke</h1>

      <Wrapper>
        <JokeWrapper>
          <Avatar src={joke.icon_url} alt="Chuck Norris" />
          <p>{joke.value}</p>
        </JokeWrapper>
        <Input
          placeholder="User Name"
          type="text"
          onChange={(e) => dispatch(setName(e.target.value))}
          value={name}
        />
        <Textarea
          as="textarea"
          placeholder="Comment"
          onChange={(e) => dispatch(setComment(e.target.value))}
          value={comment}
        />
        <ButtonsWrapper>
          <Button primary onClick={sendComment}>
            send comment
          </Button>
          <Button secondary onClick={resetInputs}>
            reset inputs
          </Button>
          <Button
            secondary
            onClick={() => {
              dispatch(getJoke());
            }}
          >
            reset joke
          </Button>
        </ButtonsWrapper>
      </Wrapper>

      <Comments commentsList={comments} />
    </div>
  );
}

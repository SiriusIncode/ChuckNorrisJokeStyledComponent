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
import loadJoke from "./services/jokeService";
import loadComments from "./services/comentService";
import generateRandomColor from "./helpers";
import { setComment } from "./reducers/commentReducer";
import { setName } from "./reducers/nameReducer";
import { useDispatch, useSelector } from "react-redux";
import { setJoke } from "./reducers/jokeReducer";
import { setComments } from "./reducers/commentsReducer";
import { setLoaded } from "./reducers/loadedReducer";
import { nanoid } from '@reduxjs/toolkit'

export default function App() {
  const joke = useSelector((state) => state.joke.value);
  const comments = useSelector((state) => state.comments.value);
  const comment = useSelector((state) => state.comment.value);
  const name = useSelector((state) => state.name.value);
  const loaded = useSelector((state) => state.loaded.value);
  const dispatch = useDispatch();

  useEffect(() => {
      loadJoke((joke) => dispatch(setJoke(joke)))
      loadComments((comment) => dispatch(setComments(comment)))
      dispatch(setLoaded(true))
  }, []);

  const sendComment = () => {
    const copyComments = [...comments];
    copyComments.unshift({
      time: new Date(),
      body: comment,
      icoColor: generateRandomColor(),
      name,
      id: nanoid()
    });

    dispatch(setComments(copyComments));
    dispatch(setName(""));
    dispatch(setComment(""));
  };

  const resetInputs = () => {
    dispatch(setName(""));
    dispatch(setComment(""));
  };
  console.log(loaded);

  if (!loaded)
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
            onClick={() => loadJoke((joke) => dispatch(setJoke(joke)))}
          >
            reset joke
          </Button>
        </ButtonsWrapper>
      </Wrapper>

      <Comments commentsList={comments} />
    </div>
  );
}

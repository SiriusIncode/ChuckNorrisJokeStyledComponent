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

export default function App() {
  const [joke, setJoke] = useState({});
  const [comments, setComments] = useState([]);
  const comment = useSelector((state) => state.comment.value);
  const name = useSelector((state) => state.name.value);
  const dispatch = useDispatch();

  useEffect(() => {
    loadJoke(setJoke);
    loadComments(setComments);
  }, []);

  const sendComment = () => {
    const copyComments = comments;
    copyComments.unshift({
      time: new Date(),
      body: comment,
      icoColor: generateRandomColor(),
      name,
    });

    setComments(copyComments);
    setName("");
    setComment("");
  };

  const resetInputs = () => {
    setName("");
    setComment("");
  };

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
          <Button secondary onClick={() => loadJoke(setJoke)}>
            reset joke
          </Button>
        </ButtonsWrapper>
      </Wrapper>

      <Comments commentsList={comments} />
    </div>
  );
}

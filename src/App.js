import "./styles.css";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import Button from "./Button";
import Input, { Textarea } from "./Input";
import Wrapper, { JokeWrapper, ButtonsWrapper } from "./Wrapper";
import Avatar from "./Avatar";
import loadJoke from "./jokeService";
import loadComments from "./comentService";
import generateRandomColor from "./helpers";

export default function App() {
  const [joke, setJoke] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

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
      name
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
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <Textarea
          as="textarea"
          placeholder="Comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
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

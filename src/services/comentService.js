import generateRandomColor from "../helpers";

const loadComments = async (done) => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((res) => {
      done(
        res.map((comment) => ({
          ...comment,
          time: new Date(),
          icoColor: generateRandomColor(),
        }))
      );
    });
};

export default loadComments;

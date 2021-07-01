const loadComments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (res.status !== 200) {
    throw new Error("Not Found");
  }
  return res.json();
};

export default loadComments;

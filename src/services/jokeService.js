const loadJoke = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random/");

  if (res.status !== 200) {
    throw new Error("Not Found");
  }

  return res.json();
};

export default loadJoke;

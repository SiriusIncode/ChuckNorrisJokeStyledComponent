import {useDispatch} from 'react-redux';
import {setJoke} from '../reducers/jokeReducer';

const dispatch = useDispatch();

const loadJoke = () => {
  fetch("https://api.chucknorris.io/jokes/random/")
    .then((res) => res.json())
    .then((res) => {
      dispatch(setJoke(res));
    });
};

export default loadJoke;

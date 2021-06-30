import {configureStore} from '@reduxjs/toolkit';
import paginationReducer from './reducers/paginationReducer';
import rangeReducer from './reducers/rangeReducer';
import jokeReducer from './reducers/jokeReducer';
import commentReducer from './reducers/commentReducer';
import nameReducer from './reducers/nameReducer';
export default configureStore({
    reducer: {
        page: paginationReducer,
        range: rangeReducer,
        joke: jokeReducer,
        comment: commentReducer,
        name: nameReducer
    }
})
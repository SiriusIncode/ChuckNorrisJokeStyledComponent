import {configureStore} from '@reduxjs/toolkit';
import paginationReducer from './reducers/paginationReducer';
import rangeReducer from './reducers/rangeReducer';

export default configureStore({
    reducer: {
        page: paginationReducer,
        range: rangeReducer
    }
})
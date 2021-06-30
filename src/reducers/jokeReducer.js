import {createSlice} from '@reduxjs/toolkit';

const jokeReducer = createSlice({
    name: 'joke',
    initialState: {
        value: {}
    },
    reducers: {
        setJoke: (state, action) => {
            state.value = action.payload
        }
    }
});

export const {setJoke} = jokeReducer.actions;
export default jokeReducer.reducer;
import { configureStore } from '@reduxjs/toolkit';
import translateReducer from './translateSlice';

const store = configureStore({
    reducer: {
        translate: translateReducer,
    },
});

export default store;

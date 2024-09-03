import { createSlice } from '@reduxjs/toolkit';
import { translateText } from './api'; 

const translateSlice = createSlice({
    name: 'translate',
    initialState: {
        translation: '',
        loading: false,
    },
    reducers: {
        translateRequest: (state) => {
            state.loading = true;
        },
        translateSuccess: (state, action) => {
            state.loading = false;
            state.translation = action.payload;
        },
    },
});

export const { translateRequest, translateSuccess } = translateSlice.actions;

export const fetchTranslation = (text, targetLanguage) => async (dispatch) => {
    dispatch(translateRequest());
    const translation = await translateText(text, targetLanguage);
    dispatch(translateSuccess(translation));
};

export default translateSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JsonData } from '../../types/types';
import { RootState } from '../store';

interface JsonState {
    data: JsonData | null;
    history: string[];
}

const initialState: JsonState = {
    data: null,
    history: [],
};

const jsonSlice = createSlice({
    name: 'json',
    initialState,
    reducers: {
        setJsonData(state, action: PayloadAction<JsonData>) {
            state.data = action.payload;
        },
        addToHistory(state, action: PayloadAction<string>) {
            state.history.push(action.payload);
        },
    },
});

export const { setJsonData, addToHistory } = jsonSlice.actions;

export const selectJsonData = (state: RootState) => state.jsonData.data;
export const selectHistory = (state: RootState) => state.jsonData.history;

export default jsonSlice.reducer;

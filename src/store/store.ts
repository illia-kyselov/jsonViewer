import { configureStore } from '@reduxjs/toolkit';
import linkKeysReducer from './slices/linkKeysSlice';
import jsonReducer from './slices/jsonSlice';

export const store = configureStore({
    reducer: {
        linkKeys: linkKeysReducer,
        jsonData: jsonReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import userReducer from './slices/userSlice';
import conversationReducer from './slices/conversationSlice';

const middleware = [logger]

export const store = configureStore({
    reducer: {
        user: userReducer,
        conversations: conversationReducer
    },
    middleware
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
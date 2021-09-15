import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import conversationReducer from './slices/conversationSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        conversations: conversationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
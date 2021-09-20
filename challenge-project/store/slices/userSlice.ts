import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import type { RootState } from '../store';

const initialState: User = {
    displayName: '',
    email: '',
    loggedIn: false,
    userId: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
                    state.displayName = action.payload.displayName
                    state.email = action.payload.email
                    state.userId = action.payload.userId
                    state.loggedIn = true
        },
        logout: (state) => {
            state = initialState
        },
        updateDisplayName: (state, action: PayloadAction<string>) => {
            state.displayName = action.payload
        }
    }
})

export const { login, logout, updateDisplayName } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
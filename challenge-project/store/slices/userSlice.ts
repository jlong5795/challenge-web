import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
                    state.loggedIn = true
        },
        logout: (state) => {
            state = initialState
        },
        updateDisplayName: (state, action: PayloadAction<string>) => {
            state.displayName = action.payload
        },
        updateId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload
        }
    }
})

export const { login, logout, updateDisplayName, updateId } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
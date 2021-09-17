import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import type { RootState } from '../store';

const initialState: User = {
    displayName: null,
    email: null,
    loggedIn: false,
    userId: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            // send email to api
            axios.post("/api/auth/login", {email: action.payload.email}).then(response => {
                state = {
                    displayName: action.payload.displayName,
                    email: action.payload.email,
                    userId: response.data.id,
                    loggedIn: true
                }
                console.log(state)
              }).catch(error => {
                  state = initialState
                  throw new error
              })
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
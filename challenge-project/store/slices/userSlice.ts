import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';

interface UserState {
    displayName: string | null;
    email: string | null;
}

const initialState: UserState = {
    displayName: null,
    email: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
            // request to backend?
            state = action.payload
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
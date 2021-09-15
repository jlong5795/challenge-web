import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';

interface ConversationState {
    conversations: [] | [any]
}

const initialState: ConversationState = {
    conversations: []
}

export const conversationSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        send: (state) => {
            state
        },
        receive: (state) => {
            state
        }
    }
})

export const { send, receive } = conversationSlice.actions

export const selectConversation = (state: RootState) => state.conversations

export default conversationSlice.reducer
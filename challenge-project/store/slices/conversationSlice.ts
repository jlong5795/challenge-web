import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';
import { io } from "socket.io-client";

interface ConversationState {
    connected: boolean
    chat: IMsg[]
    socketId: string
}

const initialState: ConversationState = {
    chat: [],
    connected: false,
    socketId: ''
}

export const conversationSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        connect: (state, action) => {
            state.connected = true
            state.socketId = action.payload
        },
        disconnect: (state, action ) => {
            action.payload.disconnect()
            state.socketId = ''
            state.connected = false
        },
        send: (state) => {
            state
        },
        receive: (state, action) => {
            state.chat.push(action.payload)
        }
    }
})

export const { connect, disconnect, send, receive } = conversationSlice.actions

export const selectConversation = (state: RootState) => state.conversations

export default conversationSlice.reducer
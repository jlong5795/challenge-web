import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';
import { io } from "socket.io-client";
import axios from "axios";

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
        send: (state, action) => {
            if (action.payload.msg) {
                const message = {
                    user: action.payload.user,
                    msg: action.payload.msg
                }

                axios.post('/api/chat', message).then().catch(error => {
                    throw new error
                })
            }
        },
        receive: (state, action) => {
            state.chat.push(action.payload)
        }
    }
})

export const { connect, disconnect, send, receive } = conversationSlice.actions

export const selectConversation = (state: RootState) => state.conversations

export default conversationSlice.reducer
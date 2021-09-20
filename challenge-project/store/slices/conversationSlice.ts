import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';
import { getUsers } from '../../utils/users';
import axios from "axios";

interface ConversationState {
    connected: boolean
    chat: IMsg[]
    socketId: string,
    users: any[]
}

const initialState: ConversationState = {
    chat: [],
    connected: false,
    socketId: '',
    users: []
}

export const conversationSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        connect: (state, action) => {
            state.connected = true
            state.socketId = action.payload
            state.users = getUsers()
            console.log(state.users)
        },
        disconnect: (state, action ) => {
            action.payload.disconnect()
            state.socketId = ''
            state.connected = false
            state.users = getUsers()
            console.log(state.users)
        },
        send: (state, action) => {
            if (action.payload.msg) {
                const message = {
                    user: action.payload.displayName,
                    msg: action.payload.msg
                }

                axios.post('/api/chat', message).then(response => console.log(message)).catch(error => {
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
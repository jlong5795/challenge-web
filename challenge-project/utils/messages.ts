import axios from 'axios';

interface Message {
    user: string;
    msg: string;
}

export const sendIMessage = async (message: Message) => {
    try {
        const response = axios.post('/api/chat', message)
    } catch (e) {
        console.log(e)
    }
}
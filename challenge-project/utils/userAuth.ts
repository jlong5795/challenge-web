import axios from 'axios';

interface LogInUser {
    displayName: string;
    email: string;
}

export const logUserIn = async (user: LogInUser) => {
    const response = await axios.post('/api/auth/login', user)
    return response.data.id
}
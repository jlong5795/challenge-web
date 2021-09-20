import axios from 'axios';

interface LogInUser {
    displayName: string;
    email: string;
}

export const logUserIn = async (user: LogInUser) => {
    try {
        const response = await axios.post('/api/auth/login', user)
        return response.data.id
    } catch (e) {
        console.log(e)
    }
}

export const getUsers = () => {
    let users: any[] = []
    axios.get('/api/getUsers').then(response => {
        users = response.data
    }).catch(error => console.log(error))
    return users
}
import axios from 'axios';

interface LogInUser {
    displayName: string;
    email: string;
}

export const getUsers = () => {
    let users: any[] = []
    axios.get('/api/getUsers').then(response => {
        users = response.data
    }).catch(error => console.log(error))
    return users
}
export const users: any[] = [];

// join user to chat
const userJoin = (id: string, username: string, room: string) => {
    const user = { id, username, room };

    users.push(user);

    return user;
}

// get current user
const getCurrentUser = (id: string) => {
    return users.find(user => user?.id === id)
}

module.exports = {
    userJoin,
    getCurrentUser
}
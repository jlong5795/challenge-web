type ChatRoom = {
    id: number
    messages: []
}

type IMsg = {
    user: string;
    msg: string;
}
interface User {
    displayName: string | null;
    email: string | null;
    loggedIn?: boolean;
    userId?: string;
}
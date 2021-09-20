type ChatRoom = {
    id: number
    messages: []
}

type IMsg = {
    user: string;
    msg: string;
    finalData?: {
        [key:string]: any | undefined;
    }
}
interface User {
    displayName: string | null;
    email: string | null;
    loggedIn?: boolean;
    userId?: string;
}
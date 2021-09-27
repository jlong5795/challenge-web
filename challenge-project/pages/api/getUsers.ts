import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../types/next";

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
    if (req.method === 'GET') {
        const sockets = await res.socket.server.io.fetchSockets()
        
        console.log("All sockets", sockets)

        res.status(200).send("hello!")
    }
}

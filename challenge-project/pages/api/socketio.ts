import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from '../../types/next';
import { Server as ServerIO } from 'socket.io';
import { Server as NetServer } from 'http';

export const config = {
    api: {
        bodyParser: false
    }
}

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
    if (!res.socket.server.io) {
        console.log("** New Socket.io server **")
        // adapts the Next net server to http server
        const httpServer: NetServer = res.socket.server as any;
        const io = new ServerIO(httpServer, {
            path: '/api/socketio'
        })

        io.on('connect', async (socket) => {
            socket.on('displayName', (displayName, socketId) => {
                socket.join('main')

            })
        })

        io.on('disconnect', socket => {
            socket.leave('main')
        })

        res.socket.server.io = io;
    }
    res.end();
}
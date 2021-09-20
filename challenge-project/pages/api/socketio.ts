import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from '../../types/next';
import { Server as ServerIO } from 'socket.io';
import { Server as NetServer } from 'http';
import { current } from 'immer';

export const config = {
    api: {
        bodyParser: false
    }
}

export const users: any[] = []

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
    if (!res.socket.server.io) {
        console.log("** New Socket.io server **")
        // adapts the Next net server to http server
        const httpServer: NetServer = res.socket.server as any;
        const io = new ServerIO(httpServer, {
            path: '/api/socketio'
        })

        io.on('connect', socket => {
            socket.on('displayName', (displayName, socketId) => {
                console.log(displayName, "Display Name")
                const currentUser = {
                    displayName,
                    socketId
                }
                users.push(currentUser)
            })
            // socket.join('main')
            // const clients = io.sockets.adapter.rooms.get('main')
            // if (clients && clients.size > 0) {
            //     const serializedSet = [...clients.keys()]
            //     socket.emit("userList", serializedSet)
            //     console.log("Clients", clients)
            // }
        })

        io.on('disconnect', socket => {
            socket.leave('main')
            console.log(io.sockets.adapter.rooms.get('main'))
        })
        res.socket.server.io = io;
    }
    res.end();
}
import type { NextApiRequest, NextApiResponse } from 'next';
import { users } from './socketio';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        res.status(200).json(users)
    }
}

export default handler;
import { v4 as uuid } from 'uuid';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        if (req.body.email) {
            const userId = uuid()
            res.status(201).json({id: userId})
        }   
    }
}

export default handler;
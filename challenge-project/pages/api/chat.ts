import { NextApiRequest } from "next";
import urlMetadata from 'url-metadata';
import { NextApiResponseServerIO } from "../../types/next";

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
    if (req.method === "POST") {
        let message = req.body;
        let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
        const urls = message.msg.match(urlRegex)

        if (urls !== null) {
            const metaData = await urlMetadata(urls[0])
            const resolved = Promise.resolve(metaData)

            const finalData = {
                title: (await resolved).title,
                image: (await resolved).url,
                author: (await resolved).author,
                description: (await resolved).description,
                source: (await resolved).source
            }

            message = {
                ...message,
                finalData
            }
        }

        //Sends to channel message
        res?.socket?.server?.io?.emit("message", message);

        // return the message
        res.status(201).json(message)
    }
}
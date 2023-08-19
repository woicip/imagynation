import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse<{ status: string, message: string }>){
    if(req.method !== 'GET') return res.status(405).json({ status: 'Error', message: 'Method Not Allowed' })   

    res.status(400).json({ status: "Bad Request", message: "Please specify post ID.\nFor example: GET /api/post/1" })
}
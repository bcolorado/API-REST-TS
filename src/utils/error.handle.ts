import { Response } from "express";

export const httpHandler = (res:Response, error: string) => {
    return res.status(500).json({error});
}
import { Request, Response, Router } from "express";

const router = Router();

router.get('/items', (req: Request, res: Response)=>{
    res.send({message: 'Haciendo get a items'});
})

export { router }
import { Router } from "express";

const router = Router();

router.get('/testing', (req, res)=>{
    res.send({message: 'Haciendo get a testing'});
})

export { router }
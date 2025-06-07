import express from 'express'

const router = express.Router();

router.get('/note',(req,res)=>{
    res.send(200).json({
        message:"Hello!"
    })
})

export default router;
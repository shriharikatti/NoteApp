import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js'


dotenv.config();

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.use('/api/v1/',authRoutes);

connectDB();

const PORT = process.env.PORT || 4000

app.listen(PORT,(req,res)=>{
    console.log("Server is running on PORT:",PORT)
})
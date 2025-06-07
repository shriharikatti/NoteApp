import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import NoteRoutes from './routes/Note.routes.js'


dotenv.config();

const app = express();
app.use(express.json())

app.use('/api/notes',NoteRoutes);

connectDB();

const PORT = process.env.PORT || 4000

app.listen(PORT,(req,res)=>{
    console.log("Server is running on PORT:",PORT)
})
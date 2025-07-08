import express from 'express'
import cors from 'cors';
import "dotenv/config";
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';


const app = express()

await connectDB()

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> res.send("Server is Running"))
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Running on port ${PORT}`))
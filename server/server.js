import express from 'express'
import cors from 'cors';
import "dotenv/config";
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import ownerRouter from './routes/ownerRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';


const app = express()

app.use(cors({
    origin: ["https://car-rental-bd.vercel.app",
    "http://localhost:5173"],
    credentials: true
  }));
  

await connectDB()

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> res.send("Car Rental Server is Running"))
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Running on port ${PORT}`))
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 8080;

connectDB(); // connects to DB right before we initialize the app

const app = express();

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Cookie Parser Middleware
app.use(cookieParser());

app.get('/', (req, res)=> {
    res.send("API is running ...");
});

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>console.log(`Server running on port ${port}`))
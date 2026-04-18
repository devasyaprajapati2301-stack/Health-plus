import express from 'express';
import DBconnect from './config/DBconnect.js';
import book from './routes/book.js';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app= express();
DBconnect();
app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello !! welcome to appointemt book api");
});

app.post('/api',book);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})
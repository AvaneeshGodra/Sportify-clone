import express from 'express';
import userRoutes from './routes/user-routes.js';
import cors from 'cors';
import verifyRoutes from './routes/varify-toke.js';

import dotenv from 'dotenv'
dotenv.config()

const app=express();

app.use(express.json()); //json nikalta hai (next)


app.use(cors());// cross orgin 

app.use('/',userRoutes);
app.use('/',verifyRoutes);

//last middleware
app.use((req,res,next)=>{
    res.json({message:'Invalid URL'});
})

const server=app.listen(process.env.PORT||8000,(err)=>{
    if(err){
        console.log('server crash',err);
    }
    else{
        console.log('server up and running', server.address().port);
    }
})
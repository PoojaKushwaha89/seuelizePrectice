import express from 'express';
import {Request,Response} from 'express'
import { sequelize } from './config/db-connection';

const app=express()

app.get('/',(req,res:Response)=>{
    res.send({status:200,messge:"Hi!!! this is workign"})
})

sequelize

app.listen(3000,()=>{
    console.log("Server is listining on 3000");
})
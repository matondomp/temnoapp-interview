import 'reflect-metadata'

import express from 'express'
import cors from "cors"
import path from 'path'

import { route } from './route/route'

import './database/index'

const app=express()
app.use(cors())

app.use(express.json())

app.use('/uploads',
express.static(path.resolve(__dirname,'..','tmp')))

app.use('/product',route)

app.listen(3335,()=>{
    console.log("runing on port 3335 🚀️🚀️🚀️🚀️🚀️🚀️")
})
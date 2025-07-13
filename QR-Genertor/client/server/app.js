require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const userModel = require('./Model/user')
const app = express()
app.use(bodyparser.json())
app.use(cors({
    origin:'https://localhost:3000'
}))



const port = process.env.PORT ;
app.listen(port,(req,res)=>{
    console.log(`server is runing on ; ${port}`)
})
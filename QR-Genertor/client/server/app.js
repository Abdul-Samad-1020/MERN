require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const db = require('./db')
// const userModel = require('./Model/user')


const userRouter = require('./Route/UserRoute')

const app = express()
app.use(bodyparser.json())
app.use(cors({
    origin:'http://localhost:3000'
}))



app.use('/userapi',userRouter)

// const port = process.env.PORT || 7000;
// app.listen(port,(req,res)=>{
//     console.log(`server is runing on ; ${port}`)
// })

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`✅ Server is running on: ${port}`);
});

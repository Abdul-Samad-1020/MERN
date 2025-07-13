require('dotenv').config()
const monfoose = require('mongoose')

monfoose.connect(process.env.DB_URL)

monfoose.connection.on("connected", ()=>{
    console.log("mongodb connected")
})

monfoose.connection.on("error",(error)=>{
    console.log(`Error is ${error}`)
})

module.exports = monfoose
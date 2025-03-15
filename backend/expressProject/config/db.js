const mongoose = require('mongoose');

const connection =mongoose.connect('mongodb://localhost:0.0.0.0').then(()=>{
    console.log("connected to MongoDB")
})

module.exports = connection;
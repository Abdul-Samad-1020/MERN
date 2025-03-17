const { MongoClient } = require("mongodb");
let URL = "mongodb://localhost:27017/";
const client = new MongoClient(URL);
let dbconnection = async () => {
  await client.connect();
  console.log("Connected to MongoDB");
  let db = client.db("mongodbProject-database");
    return db;
};

module.exports = dbconnection;
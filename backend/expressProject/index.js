let express = require("express");
let app = express();
let morgan = require("morgan");
app.use(morgan('dev'));
const dbconnection = require('./config/db');
const userModel = require('./Models/user')
// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));// use to show form  data using public

app.set("view engine", "ejs");
app.use(express.static("public"));
// Handle POST request for login
// app.get("/login", (req, res) => {
//   console.log(req.body); // Log the request body
//   res.send({ status: 1, message: "Login success", data: req.body });
// });

app.get("/", (req, res) => {
  res.render("index", { title: "this is home" });
});
app.post("/login-form-data", (req, res) => {
  console.log(req.body);
  res.send("data received");
})


// this is middleware
app.use((req, res, next) => {
  console.log("this is middleware");
  return next();
});
app.get("/home", (req, res) => {
  res.send({ status: 1, message: "Welcome to Homepage", data: null });
});

app.get("/news/:id", (req, res) => {
  let news = req.params.id;
  res.send({ status: 1, message: "hello", data: news });
});
// Start server on port 800
app.listen(800, () => {
  console.log("Server is running on http://localhost:800");
});

// third party milldeware

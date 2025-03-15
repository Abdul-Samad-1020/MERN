let express = require("express");
let app = express();
let morgan = require("morgan");

const dbconnection = require('./config/db');
const userModel = require('./Models/user');

// Middleware to parse JSON and handle form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(express.static("public"));

// Global Middleware (Should be before route handlers)
app.use((req, res, next) => {
    console.log("This is middleware");
    next();
});

// Routes
app.get("/", (req, res) => {
    res.render("index", { title: "This is Home" });
});

app.post("/login-form-data", (req, res) => {
    console.log(req.body);
    res.send("Data received");
});

app.get("/home", (req, res) => {
    res.json({ status: 1, message: "Welcome to Homepage", data: null });
});

app.get("/news/:id", (req, res) => {
    let news = req.params.id;
    res.json({ status: 1, message: "Hello", data: news });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: 0, message: "Something went wrong!", error: err.message });
});

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

let express = require('express'); 
let app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Handle POST request for login
app.post('/login', (req, res) => {
    console.log(req.body);  // Log the request body
    res.send({status: 1, message: "Login success", data: req.body});
});  

// Start server on port 800
app.listen(800, () => {
    console.log("Server is running on http://localhost:800");
});

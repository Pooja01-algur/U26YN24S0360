// Import the Express module
const express = require("express");

// Create an Express application
const app = express();

// Import the path module
const path = require("path");

// Middleware to read form data
app.use(express.urlencoded({ extended: false }));

// Handle GET request for /dept
app.get("/dept", (req, resp) => {

    // Send the dept.html file to the browser
    resp.sendFile(path.join(__dirname, "dept.html"));
});

// Handle POST request for /dept
app.post("/dept", (req, resp) => {

    // Send a response message to the browser
    resp.send("<h1>Your information received</h1>");

    // Display the submitted form data in the terminal
    console.log(req.body);
});

// Start the server on port 3000
app.listen(3000, () => {

    // Display a message when the server starts
    console.log("server started");
});
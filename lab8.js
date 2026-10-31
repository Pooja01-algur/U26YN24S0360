
// Define a custom middleware function
function reqlog(req, resp, next) {

    // Display the HTTP request method in the terminal
    console.log(`Request method=${req.method}`)

    // Display the URL requested by the client
    console.log(`Request url=${req.url}`)

    // Create the current date and time in ISO format
    let d = new Date().toISOString()

    // Display the date and time of the request
    console.log(`Date of request=${d}`)

    // Call next() to pass the request to the next middleware or route
    next()
}

// Import the Express module
const express = require("express")

// Create an Express application
const app = express()

// Register the custom middleware function
app.use(reqlog)

// Start the server on port 3000
app.listen(3000, () => {

    // Display a message when the server starts
    console.log("server started 360")
})
//it uses dept.html form

// Import the Express module
const express = require("express")

// Create an Express application
const app = express()

app.use(express.json())

// Middleware to read form data sent using URL-encoded format
app.use(express.urlencoded({ extended: false }))

// Serve static files such as HTML, CSS, and JavaScript from the current folder
app.use(express.static('.'))

// Handle POST request sent to /dept
app.post("/dept", (req, resp) => {

    // Get the department name from the submitted form data
    let dname = req.body.dname

    // Get the HOD name from the submitted form data
    let hod = req.body.hod

    // Check whether department name is empty
    if (!dname) {

        // Send a 400 Bad Request response with a red error message
        resp.status(400).send(
            `<h1 style="color:red;">Please enter department name</h1>`
        )

    // Check whether HOD name is empty
    } else if (!hod) {

        // Send a 400 Bad Request response with a red error message
        resp.status(400).send(
            `<h1 style="color:red;">Please enter hod name</h1>`
        )

    // If both department name and HOD name are entered
    } else {

        // Send a success message with green color
        resp.send(
            `<h1 style="color:green;">Your information recieved</h1>`
        )
    }
})

// Start the server on port 3000
app.listen(3002, () => {

    // Display a message in the terminal when the server starts
    console.log("server started 360")
})

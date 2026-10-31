//token 123 autherization is required
// Create a custom authentication middleware function
function auth(req, resp, next) {

    // Get the Authorization header from the request
    let token = req.headers["authorization"]

    // Check whether the token contains "token123"
    if (token.includes("token123")) {

        // Token is valid, so continue to the next function
        next()

    } else {

        // Send 401 Unauthorized response if token is invalid
        resp.status(401).json({
            "message": "Token number is invalid"
        })
    }
}

// Import the Express module
const express = require("express")

// Create an Express application
const app = express()

// Middleware to read JSON data from the request body
app.use(express.json())

// Create an array containing student records
const students = [

    // First student record
    { id: 1, name: 'anand', course: 'BCA' },

    // Second student record
    { id: 2, name: 'kiran', course: 'BBA' }
]

// GET request to display all students
app.get("/students", (req, resp) => {

    // Send the students array as a JSON response
    resp.json(students)
})


// POST request to add a new student
// The auth middleware runs before this route
app.post("/students", auth, (req, resp) => {

    // Get id, name, and course from the request body
    let { id, name, course } = req.body

    // Create a new student object
    let s = {
        id: id,
        name: name,
        course: course
    }

    // Add the new student to the students array
    students.push(s)

    // Send success response with the new student
    resp.json({
        "message": "student record saved",
        "student": s
    })
})

// Start the server on port 3000
app.listen(3001, () => {

    // Display a message in the terminal when the server starts
    console.log("server started")
})
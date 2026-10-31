// Create an array named students to store student records
let students = [

    // First and second students object
    { id: 1, name: 'Anand', course: 'BCA' },
    { id: 2, name: 'Kiran', course: 'BBA' }
]

// Import the Express module
const express = require("express")

// Create an Express application
const app = express()

// Middleware to read JSON data from request body
app.use(express.json())

// GET request to display all students
app.get("/students", (req, resp) => {

    // Send the students array as JSON response
    resp.json(students)
})

// GET request to find a student using ID
app.get("/students/:id", (req, resp) => {

    // Get the ID from the URL
    let sid = req.params.id

    // Find the student whose ID matches the given ID
    let s = students.find((s) => {
        return s.id == sid
    })

    // Check whether the student was found
    if (s) {

        // Send the student details as JSON
        resp.json(s)

    } else {

        // Send 404 error if student is not found
        resp.status(404).json({
            "message": "students record not found"
        })
    }
})

// POST request to add a new student
app.post("/students", (req, resp) => {

    // Get ID from request body
    let id = req.body.id

    // Get name from request body
    let name = req.body.name

    // Get course from request body
    let course = req.body.course

    // Create a new student object
    let s = {
        id: id,
        name: name,
        course: course
    }

    // Add the new student to the students array
    students.push(s)

    // Send success response with status code 201
    resp.status(201).json({
        "message": "student record inserted",
        "student": s
    })
})

// PUT request to update a student using ID
app.put("/students/:id", (req, resp) => {

    // Get student ID from the URL
    let sid = req.params.id

    // Get new name from request body
    let name = req.body.name

    // Get new course from request body
    let course = req.body.course

    // Create an updated student object
    let s = {
        id: sid,
        name: name,
        course: course
    }

    // Find the index of the student to be updated
    let index = students.findIndex((s) => {
        return s.id == sid
    })

    // Check whether the student exists
    if (index != -1) {

        // Replace the old student with the updated student
        students[index] = s

        // Send success response
        resp.json({
            "message": "student record updated",
            "student": s
        })

    } else {

        // Send 404 error if student is not found
        resp.status(404).json({
            "message": "student record not found"
        })
    }
})

// DELETE request to delete a student using ID
app.delete("/students/:id", (req, resp) => {

    // Get student ID from the URL
    let sid = req.params.id

    // Find the student using the given ID
    let s = students.find((s) => {
        return s.id == sid
    })

    // Check whether the student exists
    if (s) {

        // Remove the student from the array
        students = students.filter((s) => {
            return s.id != sid
        })

        // Send success response
        resp.json({
            "message": "student record deleted"
        })

    } else {

        // Send 404 error if student is not found
        resp.status(404).json({
            "message": "students record not found"
        })
    }
})

// Start the server on port 3000
app.listen(3000, () => {

    // Display message in the terminal when server starts
    console.log("server started")
})
//npm install mongosh
//mongosh
// use attdb1

// Use the MongoDB database named attdb1

// Import the Express module
const express = require("express")

// Create an Express application
const app = express()

// Middleware to read JSON data from the request body
app.use(express.json())

// Import the Mongoose module
const mongoose = require("mongoose")

// Connect to the MongoDB database named attdb1
mongoose.connect("mongodb://127.0.0.1:27017/attdb1")

// Create a schema for attendance records
const attschema = new mongoose.Schema({

    // Store the roll number as a Number
    rno: Number,

    // Store the student name as a String
    name: String,

    // Store the attendance status as a String
    status: String
})

// Create a Mongoose model named Attendance
// This model is connected to the attendance collection
const Attendance = mongoose.model('attendance', attschema)

// POST request to add attendance
app.post('/students', async (req, resp) => {

    // Create a new attendance object using the data received from the client
    const att = new Attendance(req.body)

    // Save the attendance record into MongoDB
    await att.save()

    // Send a success response with status code 201
    resp.status(201).json({
        "message": "Attendance added successfully"
    })
})

// GET request to retrieve all attendance records
app.get('/students', async (req, resp) => {

    // Find all attendance records from the database
    let result = await Attendance.find()

    // Send the retrieved records as a JSON response
    resp.json(result)
})

// Start the Express server on port 3000
app.listen(3000, () => {

    // Display a message in the terminal when the server starts
    console.log("server started")
})
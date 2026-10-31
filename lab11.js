//need psql to connect database
// Import the Express module
const express = require("express")

// Create an Express application
const app = express()

// Middleware to read JSON data from the request body
app.use(express.json())

// Import the Client class from the pg (PostgreSQL) module
const { Client } = require("pg")

// Create a PostgreSQL client and provide database connection details
const client = new Client({

    // PostgreSQL server host
    host: 'localhost',

    // Default PostgreSQL port number
    port: 5432,

    // PostgreSQL username
    user: 'postgres',

    // PostgreSQL password
    password: 'root',

    // Name of the database
    database: 'college1'
})

// Connect the application to the PostgreSQL database
client.connect()

// POST request to add a new student
app.post('/students', async (req, resp) => {

    // Get the roll number from the request body
    let rno = req.body.rno

    // Get the student name from the request body
    let name = req.body.name

    // Insert the student data into the student table
    // $1 and $2 are placeholders for rno and name
    await client.query(
        `insert into student values($1,$2)`,
        [rno, name]
    )

    // Send a success response with status code 201
    resp.status(201).json({
        "message": "student added successfully"
    })
})

// GET request to retrieve all students
app.get('/students', async (req, resp) => {

    // Execute a SELECT query to get all records from the student table
    let result = await client.query("select * from student")

    // Send the database records as a JSON response
    resp.json(result.rows)
})

// Start the Express server on port 3000
app.listen(3000, () => {

    // Display a message in the terminal when the server starts
    console.log("server started")
})
// Require the dependencies we need
const express = require('express')
const cors = require('cors')

// Require database
require("./config/db_connection")

// Require router
const studentRouter = require('./routes/studentRoutes')

// Create an express server app
const app = express()

// Set a port number to listen on
const PORT = 4000

// Allow requested resources no matter where the HTTP request was initiated
app.use(cors())

// Set up middleware to handle incoming body requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Use the student router
app.use(studentRouter)

// Start the server listening for requests
app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`)
})
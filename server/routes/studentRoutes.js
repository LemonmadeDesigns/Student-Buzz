const express = require('express')
  const studentController = require('../controllers/studentController')
  const router = express.Router()

  // Set up an API for retrieving all the students
  router.get('/api/students', studentController.getStudents)

  // Set up an API for posting a new student
  router.post('/api/student/new', studentController.createStudent)

  // Set up an API for deleting a student
  router.delete('/api/student/:id', studentController.deleteStudent)

  // Set up an API for updating a student
  router.put('/api/student/:id', studentController.updateStudent)

  module.exports = router
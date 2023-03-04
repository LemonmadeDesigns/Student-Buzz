const Student = require('../models/student')

module.exports = {
  // Retrieve all the students (READ)
  getStudents(req, res) {
    Student.find()
      .then(students => res.json(students))
      .catch(err => res.status(500).json(err))
  },
  // Add a new student to the database (CREATE)
  createStudent(req, res) {
    const { body } = req
    Student.create(body)
      .then(student => res.json(student))
      .catch(err => res.status(500).json(err))
  },
  // Delete student from the database (DELETE)
  deleteStudent(req, res) {
    const { id } = req.params
    Student.findByIdAndDelete(id)
      .then(student => res.json(student))
      .catch(err => res.status(500).json(err))
  },
  // Retrieve student to edit (READ)
  getStudentToEdit(req, res) {
    const { id } = req.params
    Student.findById(id)
      .then(student => res.json(student))
      .catch(err => res.status(500).json(err))
  },
  // Update an existing student (UPDATE)
  updateStudent(req, res) {
    const { body } = req
    const { id } = req.params
    Student.findByIdAndUpdate(id, body, { new: true })
      .then(student => res.json(student))
      .catch(err => res.status(500).json(err))
  },
}
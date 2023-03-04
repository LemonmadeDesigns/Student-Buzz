const mongoose = require('mongoose')
const { Schema } = mongoose

const studentSchema = new Schema(
  {
    name: String,
    question: String,
    rating: String,
    length: String,
    year: Number,
    genre: [String],
    director: String,
    stars: [String]
  },
  { timestamps: true }
  )

module.exports = mongoose.model("student", studentSchema)
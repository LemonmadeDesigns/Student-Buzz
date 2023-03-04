import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import "./student-form.css";

  function StudentForm({ addStudent, editStudent, students }) {
    const [inputs, setInputs] = useState({});
    let urlParams = useParams()

    const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      setInputs(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = (event) => {
      event.preventDefault()
      if (students) {
        editStudent(inputs)
      } else {
        addStudent(inputs)
      }
      window.location = "/"
    }

    useEffect(() => {
      let defaults = students 
        ? students.filter(student => student._id === urlParams.studentId)[0] 
        : {}
      setInputs({...defaults})
    }, [students])

    return (
      <div className='students-form'>
        <form id="create-students" onSubmit={handleSubmit}>
          <label>Student Name:</label>
          <input 
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <label>Student Question:</label>
          <textarea
            name="question"
            cols="30"
            rows="10"
            value={inputs.question || ""}
            onChange={handleChange}>
          </textarea>
          {/* <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={inputs.rating || ""}
            onChange={handleChange}
          />
          <label>Length:</label>
          <input
            type="text"
            name="length"
            value={inputs.length || ""}
            onChange={handleChange}
          />
          <label>Year Released:</label>
          <input
            type="number"
            name="year"
            value={inputs.year || ""}
            onChange={handleChange}
          />
          <label>Genres (separated by commas and spaces):</label>
          <input
            type="text"
            name="genre"
            value={inputs.genre || ""}
            onChange={handleChange}
          />
          <label>Stars (separated by commas and spaces):</label>
          <input
            type="text"
            name="stars"
            value={inputs.stars || ""}
            onChange={handleChange}
          />
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={inputs.director || ""}
            onChange={handleChange}
          /> */}
          <button type="submit" id="student-submit">{students ? 'Edit' : 'Add'} Question</button>
          <Link to="/">
            <button type="button" id="student-cancel">Cancel</button>
          </Link>
        </form>
      </div>
    )
  };

  export default StudentForm;
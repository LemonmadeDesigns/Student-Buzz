import React from 'react';
  import "./student-block.css";
  import { Link } from 'react-router-dom'

  // StudentBlock functional component accepting the deconstructed prop of "student"
  function StudentBlock({ student, deleteStudent }) {
    return (
      <div className="student-block">
        <h3>{ student.name }</h3>
        {/* <p>{ student.year } {'\u00b7'} { student.rating } {'\u00b7'} { student.length }</p> */}
        <p><em>{ student.question }</em></p>
        {/* <p><b>Genre:</b> { student.genre.join(', ') }</p>
        <p><b>Stars:</b> { student.stars.join(', ') }</p>
        <p><b>Director:</b> { student.director }</p> */}
        <Link to={`/edit/${student._id}`}>
          <button type="button" className="btn btn-edit">Edit</button>
        </Link>
        <button type="button" className="btn btn-delete" onClick={() => deleteStudent(student._id)}>Delete</button>
      </div>
    )
  };

  export default StudentBlock;
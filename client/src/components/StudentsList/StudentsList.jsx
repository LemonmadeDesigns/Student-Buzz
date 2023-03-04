import React from 'react';
  import StudentBlock from '../Utility/StudentBlock';

  function StudentsList({ students, onDelete }) {
    return (
      <div id="students">
        {students.map(student => <StudentBlock key={student._id} student={student} deleteStudent={onDelete}/>)}
      </div>
    )
  };

  export default StudentsList;
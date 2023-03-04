import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import StudentsList from './components/StudentsList/StudentsList'
import StudentForm from './components/StudentForm/StudentForm'
import './main.css'
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// A functional component which returns JSX
function App() {
  const [students, setStudents] = useState([])

  // Similar to componentDidMount
  useEffect(() => {
    // Similar to fetch but optimized for React
    axios.get('http://localhost:4000/api/students')
      .then(response => setStudents(response.data))
  }, [])

  // Add function to delete students,which will be passed down as a prop
  const onDelete = (studentId) => {
    axios.delete(`http://localhost:4000/api/student/${studentId}`)
      // Re-render the page minus the deleted student by adjusting state rather than making another server call
      .then(({ data }) => setStudents(students.filter(student => student._id != data._id)))
  }

  // Add functionality to add new students, which will be passed down as a prop
  const onAdd = (student) => {
    axios.post('http://localhost:4000/api/student/new', student)
  }

  //Add functionality to edit existing students, which will be passed down as a prop
  const onEdit = (student) => {
    axios.put(`http://localhost:4000/api/student/${student._id}`, student)
  }

  // Create props object for component
  const studentProps = { students, onDelete }
  const editProps = { students, onEdit }

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<StudentsList {...studentProps} />}></Route>
        <Route exact path="/add" element={<StudentForm addStudent={onAdd} />}></Route>
        <Route exact path="/edit/:studentId" element={<StudentForm {...editProps} />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

// Render the App component into the DOM in the referenced element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


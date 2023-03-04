import React from 'react';
  import './header.css';
  import logo from '../../assets/student-icon.png';
  import { Link } from 'react-router-dom';

  function Header() {
    return (
      <>
      <div id="title">
        <Link to="/">
          <div id="title-icon">
            <img src={logo} alt="Student Icon"/>
          </div>
        </Link>
        <div id="title-text">
          <h1>Student Buzz!</h1>
          <h4>Where all the best students live...</h4>
        </div>
      </div>
      <Link to="/add">
        <div id="add-new">
          <button type="button" title="Add new student">+</button>
        </div>
      </Link>
      </>
    )
  };

  export default Header;
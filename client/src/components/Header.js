import React from 'react'
import '../css/Header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm
        navbar-dark bg-success mb-3 py-2">
        <div className="container">
            <h1>Jeopardy Game</h1>
        </div>
        <hr />
    </nav>
  );
};

Header.defaultProps = {
    position: "Your Position",
    company: "Your Company"
};


export default Header
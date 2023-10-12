import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
const NavbarEg = () => {
  return (
    <>
      <Router>
        <h1>Routing in React:</h1>
        <nav
          style={{
              border: "solid black 0.5rem",
              borderRadius: "1rem",
              padding: "2rem",
            }}
        >
          <Link to="/Home">Home</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/Contact">Contact</Link>
        </nav>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
      </Router>
    </>
  );
};

export default NavbarEg;

import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          Pravasa
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
         
          <NavLink to="/packages">Packages</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/booking" className="book-link">
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
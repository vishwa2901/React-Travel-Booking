import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>Wanderly</h2>
          <p>
            Explore the world, discover new places and create
            unforgettable memories.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>travel@pravasa.com</p>
          <p>+91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Pravasa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
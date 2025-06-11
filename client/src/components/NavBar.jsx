import React from 'react';
// Importing Link component to enable navigation without page refresh
import { Link } from "react-router-dom"; // ✅ Step 2 in using React Router

const NavBar = () => {
  return (
    <nav className="navbar">
        {/* Brand/logo link pointing to the Home route */}
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>

        {/* Navigation links */}
        <div className="navbar-links">
            {/* Link to the Home page */}
            <Link to="/" className="nav-link">Home</Link>

            {/* Link to the Favorites page (note: spelling corrected from 'favories' to 'favorites') */}
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
  );
}

export default NavBar;

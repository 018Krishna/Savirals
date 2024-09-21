import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "",
      padding: "10px 20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      position: "relative",
      zIndex: 1000,
      flexWrap: "wrap", // Allows wrapping for small screens
    },
    logo: {
      width: "100px", // Set width for the image
      height: "auto",
      marginLeft: "70px",
      
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      listStyleType: "none",
      paddingLeft: 0,
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontSize: "14px",
      padding: "8px 16px",
    },
   
    icons: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    actionIcon: {
      color: "black",
      fontSize: "20px",
      cursor: "pointer",
    },
    menuButton: {
      display: "none", // Hidden by default (visible on mobile view)
      color: "black",
      fontSize: "30px",
      cursor: "pointer",
    },
    mobileMenu: {
      display: isMenuOpen ? "block" : "none", // Toggle menu on mobile
      position: "absolute",
      top: "60px",
      left: 0,
      width: "100%",
      backgroundColor: "black",
      textAlign: "center",
      padding: "10px",
    },
    mobileLink: {
      display: "block",
      color: "#000",
      textDecoration: "none",
      fontSize: "16px",
      padding: "10px",
    },
    searchBarContainer: {
      display: "flex",
      alignItems: "center",
      maxWidth: "500px",
      flexGrow: 1,
      paddingLeft: "20px",
    },
    searchInput: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    searchButton: {
      padding: "8px 16px",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "0 5px 5px 0",
      cursor: "pointer",
    },
    '@media (max-width: 768px)': {
      navLinks: {
        display: "none", // Hide the desktop menu in mobile view
      },
      menuButton: {
        display: "block", // Show menu button in mobile view
      },
      searchBarContainer: {
        display: isMenuOpen ? "block" : "none", // Show search bar in mobile view
      },
    },
  };

  return (
    <div>
      {/* Navbar */}
      <div style={styles.navbar}>
        {/* Logo */}
        <div>
          <img
            src="/public/images/logo.png"
            alt="Saviral Logo"
            style={styles.logo}
          />
        </div>

        {/* Search Bar */}
        <div style={styles.searchBarContainer}>
          <input type="text" placeholder="Search" style={styles.searchInput} />
          <button style={styles.searchButton}>Search</button>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div style={styles.menuButton} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>

        {/* Navigation Links */}
        <ul style={isMenuOpen ? styles.mobileMenu : styles.navLinks}>
          <li>
            <Link to="/" style={styles.mobileLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/src/pages/WhishList" style={styles.mobileLink}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/src/pages/Categories" style={styles.mobileLink}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/src/pages/Contact" style={styles.mobileLink}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div style={styles.icons}>
          <Link to="/src/pages/WhishList">
            <i className="fas fa-heart" style={styles.actionIcon}></i>
          </Link>
          <Link to="/src/pages/WhishList">
            <i className="fas fa-shopping-cart" style={styles.actionIcon}></i>
          </Link>
          <Link to="/src/pages/Dashboard">
            <i className="fas fa-user" style={styles.actionIcon}></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

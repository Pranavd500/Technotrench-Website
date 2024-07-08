// components/Navbar.js

"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "@/Styles/Navbar.css";
import Link from "next/link";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link href="/">
          TechnoTrench <span className="navbar-sign"></span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link href="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link href="#services" className="navbar-links">
            Services
          </Link>
        </li>
        <li>
          <Link href="#about" className="navbar-links">
            About
          </Link>
        </li>
        <li>
          <Link href="#reviews" className="navbar-links">
            Reviews
          </Link>
        </li>
        <li>
          <Link href="#contact" className="navbar-links">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/verification" className="navbar-links">
            Verification
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={toggleNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faTimes} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link href="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <a href="#services" onClick={closeNav}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeNav}>
              About
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={closeNav}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeNav}>
              Contact
            </a>
          </li>
          <li>
            <Link href="/verification" onClick={closeNav}>
              Verification
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;

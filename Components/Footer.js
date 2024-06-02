import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              TechnoTrench <span className="ft-sign"></span>
            </p>
            <p className="ft-description">
              Connect with Technotrench for instant access to expert advice,
              personalized solutions, and on-demand tech support—all at your
              fingertips. Get real-time guidance from industry professionals,
              swift solutions to your tech queries, and seamless access to the
              latest tools and technologies.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Emergency Tech Support</a>
            </li>
            <li>
              <a href="#services">Software Solutions for Career Growth</a>
            </li>
            <li>
              <a href="#services">Comprehensive Career Care:</a>
            </li>
            <li>
              <a href="#services">Professional Success</a>
            </li>
            <li>
              <a href="#services">Insights for Interns</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link href="/legal">General Info</Link>
            </li>
            <li>
              <Link href="/legal">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/legal">Terms of Services</Link>
            </li>
            <li>
              <Link href="/legal">Consultations</Link>
            </li>
            <li>
              <Link href="/legal">How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:techtrench24@gmail.com">techtrench24@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 TechnoTrench. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

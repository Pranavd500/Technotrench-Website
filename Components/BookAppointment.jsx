"use client";
import React from "react";
import Image from "next/image";
import Doctor from "../Assets/card3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const handleBookAppointmentClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd3wtMTMlPjq--H3XeqYzVoTSyRQBc61L2oUBIBouXZR4_NNA/viewform?usp=sf_link",
      "_blank"
    );
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <Image src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose TechnoTrench</span>
        </h3>
        <p className="ba-description">
          At Technotrench, we stand out as your top choice for IT services and
          consultancy due to our relentless dedication to innovation, expertise,
          and client satisfaction. With a proven track record of delivering
          cutting-edge solutions, we offer:
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />
          Elite Mentorship Network
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />
          Accelerate Your Career
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />
          Effortless Enrollment
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />
          Responsive Support
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Apply
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;

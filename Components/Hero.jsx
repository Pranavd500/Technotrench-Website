"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Doctor from "../Assets/front1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function Hero() {
  // eslint-disable-next-line
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd3wtMTMlPjq--H3XeqYzVoTSyRQBc61L2oUBIBouXZR4_NNA/viewform?usp=sf_link",
      "_blank"
    );
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Development takes center stage</p>
          <h2 className="text-title">
            Welcome to Technotrench, where innovation meets transformation.
          </h2>
          <p className="text-descritpion">
            Embark on your internship journey with Technotrench and turn your
            potential into professional excellence!
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Apply
          </button>
        </div>

        <div className="hero-image-section">
          <Image className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;

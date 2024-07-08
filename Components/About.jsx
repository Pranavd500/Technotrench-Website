import React from "react";
import Image from "next/image";
import Doctor from "../Assets/card1.png";
import SolutionStep from "./SolutionStep";
import "@/Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <Image src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Technotrench pioneers IT services and consultancy, championing
          innovative solutions that redefine business landscapes. Driven by an
          unwavering passion for technology, we harness the power of software to
          revolutionize industries. Our internship program reflects our
          commitment to shaping tomorrow&apos;s tech leaders. We recognize that
          hands-on experience is paramount in the dynamic tech realm. Thus, we
          offer immersive learning through real-world projects, empowering
          students with practical skills. Backed by industry experts,
          Technotrench fosters an inclusive environment where learning thrives.
          Join us in crafting the future of technology, where every idea sparks
          innovation.
        </p>

        <h4 className="about-text-title">Our Mission</h4>

        <SolutionStep
          title="Get Your Solution"
          description="At Technotrench, our mission is to drive continuous improvement in software development. We understand that software solutions are iterative, and our goal is to consistently enhance them. This involves gathering feedback, identifying areas for improvement, and implementing updates to ensure our software is efficient, user-friendly, and reliable. We are committed to staying abreast of the latest technologies, tools, and industry trends, ensuring that our solutions remain at the forefront of innovation."
        />
        <h4 className="about-text-title">Our Vision</h4>

        <SolutionStep
          title="Get Your Solution"
          description="At Technotrench, our vision is to pioneer innovative solutions that redefine technology's limits. We aim to leverage emerging technologies, explore new ideas, and develop software that revolutionizes problem-solving and enhances user experiences."
        />
      </div>
    </div>
  );
}

export default About;

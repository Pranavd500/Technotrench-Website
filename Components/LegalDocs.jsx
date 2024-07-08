"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link href="/">
          TechnoTrench <span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to TechnoTrench, your premier destination for innovative IT
          solutions and consultancy services. Our mission is to provide
          cutting-edge technology solutions tailored to meet the unique needs of
          businesses and individuals alike. By engaging with our platform, you
          acknowledge and agree to abide by the terms outlined in our Privacy
          Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          At TechnoTrench, we prioritize the confidentiality and security of
          your information. Our Privacy Policy outlines how we collect, utilize,
          and safeguard your personal and professional data. Rest assured, your
          information is handled with the utmost care and confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          By utilizing TechnoTrench&apos;s services, you agree to adhere to our
          Terms of Service. These terms govern your usage of our platform,
          interactions with our team, and mutual responsibilities. It&apos;s
          imperative to familiarize yourself with these terms to ensure a
          seamless experience for all parties involved.
        </p>

        <p className="legal-title">Legal Docs</p>
        <p className="legal-description">
          As a testament to our commitment to quality and excellence,
          TechnoTrench proudly holds an MSME (Micro, Small, and Medium
          Enterprises) certification. This certification underscores our
          dedication to providing exceptional IT services and consultancy while
          adhering to industry standards and regulations. By partnering with
          TechnoTrench, you can trust that you are engaging with a reputable
          organization that is recognized for its expertise and professionalism
          in the field of technology. We invite you to explore our range of
          services with confidence, knowing that you are collaborating with a
          certified industry leader.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          At TechnoTrench, our internship program offers a diverse range of
          learning paths, including web and app development, data science, and
          programming in Java, C++, and Python. With hands-on experience and
          expert mentorship, you&apos;ll gain practical skills and personalized
          guidance to navigate complexities. Applying is easy—simply fill out
          our Google Form to kickstart your career in tech. Don&apos;t miss this
          opportunity to unlock your potential and thrive in the dynamic world
          of technology with TechnoTrench.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2024 TechnoTrench. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;

// components/Verification.js

"use client";
import React, { useState } from "react";
import "@/Styles/Verification.css";

function Verification() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleSearch = () => {
    const dummyCertificates = [
      {
        studentName: "Rohit Roy",
        domain: "Cyber Security and Ethical Hacking",
        duration: "4 weeks",
        certificateNumber: "tt1a1b1",
        startDate: "2024-06-18",
        endDate: "2024-07-18",
      },
      {
        studentName: "Naveen Lakshman Kumar Basina",
        domain: "Data Science",
        duration: "4 weeks",
        certificateNumber: "tt1a1b2",
        startDate: "2024-06-25",
        endDate: "2024-07-25",
      },
      {
        studentName: "Ranjeet Singh ",
        domain: "Data Science",
        duration: "4 weeks",
        certificateNumber: "tt1a1b3",
        startDate: "2024-06-18",
        endDate: "2024-07-18",
      },
      {
        studentName: "Shubham Kumar Gupta ",
        domain: "Artificial Intelligence",
        duration: "4 weeks",
        certificateNumber: "tt1a1b4",
        startDate: "2024-06-18",
        endDate: "2024-07-18",
      },
      {
        studentName: "Chetna Kishor Kothawade. ",
        domain: "Python Programming",
        duration: "4 weeks",
        certificateNumber: "tt1a1b5",
        startDate: "2024-06-18",
        endDate: "2024-07-18",
      },
      {
        studentName: "KALAIYARASAN G",
        domain: "Cyber Security and Ethical Hacking",
        duration: "4 weeks",
        certificateNumber: "tt1a1b6",
        startDate: "2024-06-18",
        endDate: "2024-07-18",
      },
      {
        studentName: "Vijaykumar Vilas Patil",
        domain: "Cyber Security and Ethical Hacking",
        duration: "4 weeks",
        certificateNumber: "tt1a1b7",
        startDate: "2024-07-16",
        endDate: "2024-08-16",
      },
      {
        studentName: "Swarnava Pal",
        domain: "Cyber Security and Ethical Hacking",
        duration: "4 weeks",
        certificateNumber: "tt1a1b8",
        startDate: "2024-07-30",
        endDate: "2024-08-30",
      },
    ];

    const result = dummyCertificates.find(
      (cert) => cert.certificateNumber === certificateNumber
    );

    setVerificationResult(result || null);
  };

  return (
    <div className="verification-container">
      <h1>Your Certificates are Verified</h1>
      <h2>Certificate Verification</h2>
      <input
        type="text"
        value={certificateNumber}
        onChange={(e) => setCertificateNumber(e.target.value)}
        placeholder="Enter Certificate Number"
        className="verification-input"
      />
      <button onClick={handleSearch} className="verification-button">
        Search
      </button>
      {verificationResult && (
        <div className="verification-result">
          <p>
            <strong>Student Name:</strong> {verificationResult.studentName}
          </p>
          <p>
            <strong>Domain:</strong> {verificationResult.domain}
          </p>
          <p>
            <strong>Duration:</strong> {verificationResult.duration}
          </p>
          <p>
            <strong>Certificate Number:</strong>{" "}
            {verificationResult.certificateNumber}
          </p>
          <p>
            <strong>Start Date:</strong> {verificationResult.startDate}
          </p>
          <p>
            <strong>End Date:</strong> {verificationResult.endDate}
          </p>
        </div>
      )}
    </div>
  );
}

export default Verification;

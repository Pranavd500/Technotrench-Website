// components/Verification.js

"use client";
import React, { useState } from "react";
import "@/styles/Verification.css";

function Verification() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleSearch = () => {
    const dummyCertificate = {
      studentName: "Pranav Desai",
      domain: "Web Development",
      duration: "4 weeks",
      certificateNumber: "dd7e7a7",
      startDate: "2023-06-01",
      endDate: "2023-06-29",
    };

    if (certificateNumber === dummyCertificate.certificateNumber) {
      setVerificationResult(dummyCertificate);
    } else {
      setVerificationResult(null);
    }
  };

  return (
    <div className="verification-container">
      <h1>Your Certificate are verified </h1>
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

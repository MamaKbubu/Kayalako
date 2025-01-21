// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1>Welcome to Developer X</h1>
      <p>Your trusted partner in land development.</p>
      <button
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Get Started
      </button>
    </section>
  );
};

export default Hero;

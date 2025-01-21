// src/components/Features.js
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Expert Team",
      description: "We have industry-leading professionals.",
    },
    {
      title: "Timely Delivery",
      description: "Projects are always completed on time.",
    },
    {
      title: "Sustainable Practices",
      description: "We care about the environment.",
    },
  ];

  return (
    <section className="features" style={{ padding: "2rem" }}>
      <h2>Why Choose Us?</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "4px",
            }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

import { Link } from "react-router-dom";
import "./home.css";
import { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("SAFE");

  const pillars = [
    {
      title: "SAFE",
      text: "Our products are dermatologically tested and completely safe for all skin types.",
      img: "public/safe.jpg",
    },
    {
      title: "NATURAL",
      text: "Crafted with carefully chosen natural ingredients to nourish your skin.",
      img: "public/natural.png",
    },
    {
      title: "ORGANIC",
      text: "Free from harsh chemicals, made with organically sourced ingredients.",
      img: "public/organic.png",
    },
  ];

  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero-banner">
        <div className="overlay">
          <div className="hero-text fade-in">
            <h1>Welcome to Crystal Beauty Clear</h1>
            <p>
              Discover clean, conscious, radiant beauty. Glow naturally with curated
              cosmetics.
            </p>
            <Link to="/products" className="cta-button">
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars-section">
        <div className="pillars-wrapper">
          {/* Left Image */}
          <div className="pillar-image">
            <img src={pillars.find(p => p.title === activeTab).img} alt={activeTab} />
          </div>

          {/* Right Tabs */}
          <div className="pillar-tabs">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`pillar-tab ${activeTab === pillar.title ? "active" : ""}`}
                onClick={() => setActiveTab(pillar.title)}
              >
                <span className="pillar-number">0{index + 1}</span>
                <span className="pillar-title">{pillar.title}</span>
              </div>
            ))}

            {/* Description */}
            <p className="pillar-description">
              {pillars.find(p => p.title === activeTab).text}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

import { Link } from "react-router-dom";
import "./home.css";
import { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("SAFE");

  const pillars = [
    {
      title: "SAFE",
      text: "Our products are dermatologically tested and completely safe for all skin types. We ensure every formula goes through rigorous testing so you can trust what you put on your skin every day.",
      img: "/safe.jpg",
    },
    {
      title: "NATURAL",
      text: "Crafted with carefully chosen natural ingredients to nourish and rejuvenate your skin. We believe in the power of nature — every product is enriched with botanical extracts and essential vitamins.",
      img: "/natural.png",
    },
    {
      title: "ORGANIC",
      text: "Free from harsh chemicals, made with organically sourced ingredients that are ethically grown and sustainably harvested. Experience pure skincare that’s kind to your skin and to the planet.",
      img: "/organic.png",
    },
  ];

  const activePillar = pillars.find((p) => p.title === activeTab);

  const routineCards = [
    {
      title: "Daily Glow Set",
      text: "A gentle cleanse, hydration boost, and barrier lock routine for bright everyday skin.",
      image: "/safe.jpg",
    },
    {
      title: "Botanical Repair",
      text: "Plant-powered care for dull and tired skin with lightweight, fast-absorbing formulas.",
      image: "/natural.png",
    },
    {
      title: "Night Renewal",
      text: "Overnight renewal blend designed to calm, replenish, and restore healthy skin texture.",
      image: "/organic.png",
    },
  ];

  return (
    <div className="homepage">
      <section className="hero-banner">
        <div className="overlay" />

        <div className="hero-grid">
          <div className="hero-text fade-in">
            <p className="hero-kicker">Science-backed skin confidence</p>
            <h1>Luxury Beauty That Works With Your Skin, Not Against It</h1>
            <p>
              Discover clean, effective formulas crafted to hydrate, repair and elevate your
              glow in every season.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="cta-button cta-primary">
                Shop Best Sellers
              </Link>
              <Link to="/about" className="cta-button cta-secondary">
                Our Story
              </Link>
            </div>

            <div className="hero-metrics">
              <div>
                <span className="metric-value">10k+</span>
                <span className="metric-label">Happy Customers</span>
              </div>
              <div>
                <span className="metric-value">98%</span>
                <span className="metric-label">Would Recommend</span>
              </div>
              <div>
                <span className="metric-value">24h</span>
                <span className="metric-label">Fast Dispatch</span>
              </div>
            </div>
          </div>

          <div className="hero-card fade-in">
            <h3>Beauty Promise</h3>
            <p>
              No harsh fillers. No heavy residue. Just skin-loving ingredients and proven
              performance.
            </p>
            <Link to="/products" className="hero-card-link">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <p>Dermatologically tested</p>
        <p>Cruelty free</p>
        <p>Paraben free</p>
        <p>Made for all skin types</p>
      </section>

      <section className="pillars-section reveal-up">
        <div className="section-heading">
          <p>Why customers stay with us</p>
          <h2>The Crystal Beauty Standard</h2>
        </div>

        <div className="pillars-wrapper">
          <div className="pillar-image">
            <img src={activePillar.img} alt={activeTab} />
          </div>

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

            <p className="pillar-description">{activePillar.text}</p>
          </div>
        </div>
      </section>

      <section className="routine-section reveal-up">
        <div className="section-heading">
          <p>Curated routines</p>
          <h2>Build A Ritual Your Skin Will Love</h2>
        </div>

        <div className="routine-grid">
          {routineCards.map((card) => (
            <article key={card.title} className="routine-card">
              <img src={card.image} alt={card.title} />
              <div className="routine-card-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link to="/products">Shop This Routine</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta reveal-up">
        <h2>Ready For Skin That Feels As Good As It Looks?</h2>
        <p>
          Start your glow journey with our customer favorites and find products tailored to
          your skin goals.
        </p>
        <Link to="/products" className="cta-button cta-primary">
          Start Shopping
        </Link>
      </section>
    </div>
  );
}

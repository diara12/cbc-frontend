import "./contact.css";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="contact-page">
      
      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’re here to help you with any questions about our products, orders, or skincare tips.</p>
      </section>

      {/* Contact Info + Form */}
      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><FaEnvelope /> support@crystalbeautyclear.com</p>
          <p><FaPhone /> 0789856023</p>
          <p>23/A, Colombo 10, Sri Lanka</p>
          <div className="social-links">
            <a href="#"><FaInstagram />cbc-beauty</a>
            <a href="#"><FaFacebook />cbc-beauty</a>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* YouTube Video */}
      <section className="contact-video">
        <h2>Watch Our Story</h2>
        <div className="video-wrapper">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/LLJSfU8oD60" 
            title="Crystal Beauty Clear - Our Story"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>
    </div>
  );
}

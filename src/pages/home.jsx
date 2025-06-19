import { Route, Routes, Link } from "react-router-dom";
import Header from "../components/header";
import ProductOverviewPage from "./client/productOverview";
import CartPage from "./client/cart";
import SearchProductsPage from "./client/searchProducts";
import ProductPage from "./client/productPage";
import "./home.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <Header />

      <div className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
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

                <section className="about-business section-padding">
                  <h2>Our Vision & Mission</h2>

                  <div className="vision-mission">
                    <div className="vision">
                      <h3>Our Vision</h3>
                      <p>
                        To redefine beauty by empowering every individual to express their natural
                        radiance through clean, ethical, and innovative cosmetics.
                      </p>
                    </div>

                    <div className="mission">
                      <h3>Our Mission</h3>
                      <p>
                        We commit to crafting sustainable and cruelty-free products, sourcing
                        premium natural ingredients, and fostering transparency that inspires
                        self-love and confidence.
                      </p>
                    </div>
                  </div>
                </section>
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/overview/:id" element={<ProductOverviewPage />} />
          <Route path="/search" element={<SearchProductsPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

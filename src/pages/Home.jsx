import { Link } from "react-router-dom";
import packages from "../data/packages";
import PackageCard from "../components/PackageCard";

function Home() {
  return (
    <div>
      <section className="hero">
        <div>
          <p className="hero-small">TRAVEL • EXPLORE • EXPERIENCE</p>

          <h1>Explore the world with Pravasa</h1>

          <p>
            Discover amazing destinations and carefully selected
            travel packages for your next unforgettable journey.
          </p>

          <Link to="/packages" className="primary-btn">
            Explore Packages
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Popular Destinations</h2>
          <p>Explore some of our most loved destinations.</p>
        </div>

        <div className="destination-list">
          <div className="simple-destination">
            <h3>Goa</h3>
            <p>Beaches, nightlife and adventure.</p>
          </div>

          <div className="simple-destination">
            <h3>Dubai</h3>
            <p>Luxury, shopping and desert adventures.</p>
          </div>

          <div className="simple-destination">
            <h3>Bali</h3>
            <p>Temples, beaches and tropical beauty.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Featured Packages</h2>
          <p>Choose a package that matches your travel plans.</p>
        </div>

        <div className="package-grid">
          {packages.slice(0, 3).map((item) => (
            <PackageCard key={item.id} packageItem={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
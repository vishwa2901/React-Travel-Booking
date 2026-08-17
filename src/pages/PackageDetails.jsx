import { useNavigate, useParams } from "react-router-dom";
import packages from "../data/packages";
import { useTravel } from "../context/TravelContext";

function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { setSelectedPackage } = useTravel();

  const packageItem = packages.find(
    (item) => item.id === Number(id)
  );

  if (!packageItem) {
    return (
      <section className="section">
        <div className="message">
          Package not found.
        </div>
      </section>
    );
  }

  function handleBooking() {
    setSelectedPackage(packageItem);
    navigate("/booking");
  }

  return (
    <section className="details-page">
      <div className="details-image">
        <img
          src={packageItem.image}
          alt={packageItem.name}
        />
      </div>

      <div className="details-content">
        <span className="package-category">
          {packageItem.category}
        </span>

        <h1>{packageItem.name}</h1>

        <p className="location">
          {packageItem.location}
        </p>

        <p>{packageItem.description}</p>

        <h3>Package Highlights</h3>

        <ul>
          {packageItem.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="details-price">
          <strong>
            ₹{packageItem.price.toLocaleString()}
          </strong>

          <span>{packageItem.duration}</span>
        </div>

        <button
          className="primary-btn"
          onClick={handleBooking}
        >
          Book This Package
        </button>
      </div>
    </section>
  );
}

export default PackageDetails;
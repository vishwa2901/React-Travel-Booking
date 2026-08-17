import { Link } from "react-router-dom";
import "./PackageCard.css";

function PackageCard({ packageItem }) {
  return (
    <div className="package-card">
      <img src={packageItem.image} alt={packageItem.name} />

      <div className="package-content">
        <span className="package-category">
          {packageItem.category}
        </span>

        <h3>{packageItem.name}</h3>

        <p>{packageItem.location}</p>
        <p>{packageItem.duration}</p>

        <div className="package-bottom">
          <strong>₹{packageItem.price.toLocaleString()}</strong>

          <Link to={`/packages/${packageItem.id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
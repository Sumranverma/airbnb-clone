import { useState } from "react";
import { property } from "../data/property";

function PropertyInfo() {
  const [showDescription, setShowDescription] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);

  return (
    <div className="property-info">
      <div className="property-intro">
        <h2>
          Entire place hosted by {property.host.name}
        </h2>

        <p>
          {property.guests} guests · {property.bedrooms} bedrooms ·{" "}
          {property.beds} beds · {property.bathrooms} bathrooms
        </p>
      </div>

      <hr />

      <div className="info-section">
        <h2>About this place</h2>

        <p>
          {showDescription
            ? `${property.description} Enjoy a peaceful and convenient stay with comfortable spaces, modern facilities, and easy access to everything you need during your trip.`
            : property.description}
        </p>

        <button
          type="button"
          className="show-more"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "Show less" : "Show more"}
        </button>
      </div>

      <hr />

      <div className="info-section">
        <h2>What this place offers</h2>

        <div className="amenities">
          {(showAmenities
            ? property.amenities
            : property.amenities.slice(0, 4)
          ).map((amenity) => (
            <div className="amenity" key={amenity}>
              <span>✓</span>
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="show-all-amenities"
          onClick={() => setShowAmenities(!showAmenities)}
        >
          {showAmenities
            ? "Show fewer amenities"
            : "Show all amenities"}
        </button>
      </div>
    </div>
  );
}

export default PropertyInfo;
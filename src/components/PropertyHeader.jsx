import { useState } from "react";
import { property } from "../data/property";

function PropertyHeader() {
  const [saved, setSaved] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property in ${property.location}`,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Property link copied!");
    }
  };

  return (
    <section className="property-header">
      <h1>{property.title}</h1>

      <div className="property-header-row">
        <div className="property-meta">
          <span className="rating">
            ★ {property.rating}
          </span>

          <span>·</span>

          <button
            type="button"
            className="reviews-link"
          >
            {property.reviews} reviews
          </button>

          <span>·</span>

          <button
            type="button"
            className="location-link"
          >
            {property.location}
          </button>
        </div>

        <div className="property-actions">
          {/* Share */}
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share property"
          >
            ↗ <span>Share</span>
          </button>

          {/* Save */}
          <button
            type="button"
            onClick={() => setSaved(!saved)}
            aria-label={
              saved
                ? "Remove from saved"
                : "Save property"
            }
          >
            <span>{saved ? "♥" : "♡"}</span>{" "}
            <span>
              {saved ? "Saved" : "Save"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PropertyHeader;
import { useState } from "react";
import { property } from "../data/property";
import Lightbox from "./Lightbox";

function PhotoTour({ onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const totalImages = property.images.length;

  const showPrevious = () => {
    setSelectedImage((current) => {
      if (current === null) return null;

      return current === 0
        ? totalImages - 1
        : current - 1;
    });
  };

  const showNext = () => {
    setSelectedImage((current) => {
      if (current === null) return null;

      return current === totalImages - 1
        ? 0
        : current + 1;
    });
  };

  return (
    <div className="photo-tour">
      <button
        className="photo-tour-close"
        onClick={onClose}
        aria-label="Close photo tour"
      >
        ✕
      </button>

      <div className="photo-tour-container">
        <h1>Photo tour</h1>

        <div className="photo-tour-grid">
          {property.images.map((image, index) => (
            <button
              type="button"
              className="photo-tour-item"
              key={image}
              onClick={() => setSelectedImage(index)}
              aria-label={`Open photo ${index + 1}`}
            >
              <img
                src={image}
                alt={`Property view ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <Lightbox
          image={property.images[selectedImage]}
          currentIndex={selectedImage}
          totalImages={totalImages}
          onClose={() => setSelectedImage(null)}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </div>
  );
}

export default PhotoTour;
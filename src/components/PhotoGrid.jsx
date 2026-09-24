import { property } from "../data/property";

function PhotoGrid({ onOpenTour }) {
  return (
    <section className="photo-gallery">
      <div className="gallery-main">
        <button
          className="gallery-image-button"
          onClick={onOpenTour}
          aria-label="Open photo tour"
        >
          <img
            src={property.images[0]}
            alt="Main property view"
          />
        </button>
      </div>

      <div className="gallery-small">
        {property.images.slice(1, 5).map((image, index) => (
          <button
            className="gallery-image-button"
            key={image}
            onClick={onOpenTour}
            aria-label={`Open photo ${index + 2}`}
          >
            <img
              src={image}
              alt={`Property view ${index + 2}`}
            />
          </button>
        ))}
      </div>

      <button
        className="show-all-photos"
        onClick={onOpenTour}
      >
        <span>▦</span>
        Show all photos
      </button>
    </section>
  );
}

export default PhotoGrid;
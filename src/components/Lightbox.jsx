import { useEffect } from "react";

function Lightbox({
  image,
  currentIndex,
  totalImages,
  onClose,
  onPrevious,
  onNext,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="lightbox">
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close photo viewer"
      >
        ✕
      </button>

      <button
        className="lightbox-previous"
        onClick={onPrevious}
        aria-label="Previous photo"
      >
        ←
      </button>

      <img
        className="lightbox-image"
        src={image}
        alt={`Property view ${currentIndex + 1}`}
      />

      <button
        className="lightbox-next"
        onClick={onNext}
        aria-label="Next photo"
      >
        →
      </button>

      <div className="lightbox-counter">
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  );
}

export default Lightbox;
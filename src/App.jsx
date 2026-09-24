import { useState } from "react";

import Navbar from "./components/Navbar";
import PropertyHeader from "./components/PropertyHeader";
import PhotoGrid from "./components/PhotoGrid";
import PropertyInfo from "./components/PropertyInfo";
import BookingCard from "./components/BookingCard";
import PhotoTour from "./components/PhotoTour";

function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);

  const openPhotoTour = () => {
    setIsPhotoTourOpen(true);
  };

  const closePhotoTour = () => {
    setIsPhotoTourOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <Navbar />

      {/* Main property page */}
      <main className="page-container">
        {/* Property title, rating, location and actions */}
        <PropertyHeader />

        {/* Property photo gallery */}
        <PhotoGrid onOpenTour={openPhotoTour} />

        {/* Property information + booking card */}
        <section className="content-layout">
          <PropertyInfo />

          <BookingCard />
        </section>
      </main>

      {/* Photo Tour */}
      {isPhotoTourOpen && (
        <PhotoTour onClose={closePhotoTour} />
      )}
    </div>
  );
}

export default App;
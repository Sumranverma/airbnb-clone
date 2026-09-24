import { useState } from "react";
import { property } from "../data/property";

function BookingCard() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(property.guests);

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert("Please select your dates first.");
      return;
    }

    alert(
      `Reservation request for ${guests} guests from ${checkIn} to ${checkOut}.`
    );
  };

  const formatDate = (date) => {
    if (!date) return "";

    const selectedDate = new Date(`${date}T00:00:00`);

    return selectedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <aside className="booking-card">
      <div className="price">
        <strong>₹{property.pricePerNight}</strong>
        <span> night</span>
      </div>

      <div className="booking-fields">
        {/* Dates */}
        <button
          type="button"
          className="booking-field"
          onClick={() => setShowCalendar(!showCalendar)}
          aria-expanded={showCalendar}
          aria-label="Select dates"
        >
          <span>DATES</span>

          <strong>
            {checkIn && checkOut
              ? `${formatDate(checkIn)} – ${formatDate(checkOut)}`
              : "Add your dates"}
          </strong>
        </button>

        {/* Simple calendar */}
        {showCalendar && (
          <div className="calendar">
            <label>
              <span>CHECK-IN</span>

              <input
                type="date"
                value={checkIn}
                min={new Date().toISOString().split("T")[0]}
                onChange={(event) => setCheckIn(event.target.value)}
              />
            </label>

            <label>
              <span>CHECKOUT</span>

              <input
                type="date"
                value={checkOut}
                min={
                  checkIn ||
                  new Date().toISOString().split("T")[0]
                }
                onChange={(event) => setCheckOut(event.target.value)}
              />
            </label>

            <button
              type="button"
              className="calendar-done"
              onClick={() => setShowCalendar(false)}
            >
              Done
            </button>
          </div>
        )}

        {/* Guests */}
        <button
          type="button"
          className="booking-field"
          onClick={() =>
            setGuests((current) =>
              current >= 6 ? 1 : current + 1
            )
          }
          aria-label="Change number of guests"
        >
          <span>GUESTS</span>

          <strong>
            {guests} {guests === 1 ? "guest" : "guests"}
          </strong>
        </button>
      </div>

      <button
        type="button"
        className="reserve-button"
        onClick={handleReserve}
      >
        Reserve
      </button>

      <p className="no-charge">
        You won't be charged yet
      </p>
    </aside>
  );
}

export default BookingCard;
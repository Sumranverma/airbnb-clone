import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./index.css";
import "./App.css";

import "./styles/navbar.css";
import "./styles/property.css";
import "./styles/gallery.css";
import "./styles/booking.css";
import "./styles/lightbox.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
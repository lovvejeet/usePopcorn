import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import StarRatings from "./StarRatings";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRatings
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    <App />
  </React.StrictMode>
);

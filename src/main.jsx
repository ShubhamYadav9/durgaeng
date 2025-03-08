import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HashRouter as Router } from "react-router-dom"; // ✅ Import HashRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      {/* ✅ Wrap App inside HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

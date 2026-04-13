import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import {
  SpecifiedCommercialTransaction,
  PrivacyPolicy,
} from "./LegalPages";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/legal" element={<SpecifiedCommercialTransaction />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
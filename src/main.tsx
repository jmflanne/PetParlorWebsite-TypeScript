//import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home.tsx";

import Appts from "./Components/Appts.tsx";
import ContactPage from "./Components/ContactPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesandPricing from "./Components/ServicesandPricing.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/Appts" element={<Appts />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/ServicesandPricing" element={<ServicesandPricing />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

//<React.StrictMode>

// <App />

//</React.StrictMode>

//<Router>
//<Routes>
//<Route path="/Home" element={<Appts />} />
//<Route path="/Home" element={<Home />} />
//</Routes>
//</Router>

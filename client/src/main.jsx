import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; // ต้องมี Tailwind import
import Mainlayout from "./layouts/Mainlayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

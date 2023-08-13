import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataContext from "./contexts/DataContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContext>
        <App />
      </DataContext>
    </BrowserRouter>
  </React.StrictMode>
);

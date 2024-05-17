import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./providers";
import { Routes } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Routes />
    </Providers>
  </React.StrictMode>,
);

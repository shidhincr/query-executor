import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./providers";
import { Router } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
);

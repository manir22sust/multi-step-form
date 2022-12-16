import React from "react";
import ReactDOM from "react-dom/client";

import MultiStepModelProvider from "./providers/MultiStepModelProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MultiStepModelProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MultiStepModelProvider>
);

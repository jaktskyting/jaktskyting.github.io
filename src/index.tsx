import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import LoginWithEmailAndPassword from "./auth/LoginWithEmailAndPassword";
import LoginWithMagicLink from "./auth/LoginWithMagicLink";
import SignUpWithEmailAndPassword from "./auth/SignUpWithEmailAndPassword";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/login" element={<LoginWithEmailAndPassword />} />
        {/* <Route path="/login" element={<LoginWithMagicLink />} /> */}
        <Route path="/signup" element={<SignUpWithEmailAndPassword />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

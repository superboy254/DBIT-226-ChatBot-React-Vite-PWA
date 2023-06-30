// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";


if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "/dist/sw.js",
        {
          scope: "/dist/", // Set the same scope as defined in the manifest file
        }
      );
      console.log("Service worker registered:", registration);
    } catch (error) {
      console.log("Service worker registration failed:", error);
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

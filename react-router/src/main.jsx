import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePageApplication from "./App";
import AboutPage from "./components/About";
import UserDetails from "./components/Account";
import ApplicationSettings from "./components/Settings";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// const user

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageApplication />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/setting" element={<ApplicationSettings />} />
        <Route path="settings">
          <Route path="useraccount" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

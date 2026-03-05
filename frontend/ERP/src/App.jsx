import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AuthModalWrapper from "./components/AuthModalWrapper";

import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import Features from "./pages/features.jsx";
import DashBoard from "./pages/dashboard.jsx";
import Contact from "./pages/contact.jsx";
function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthModalWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/contact" element={<Contact />} />

          {/* Keeping separate pages if users go directly to these URLs */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Redirect /home to / */}
          <Route path="/home" element={<Navigate to="/" />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white text-2xl font-bold">
                404 - Page Not Found
              </div>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
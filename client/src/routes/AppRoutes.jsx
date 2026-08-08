import { Routes, Route } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import Home from "../pages/Home";
import Prediction from "../pages/Prediction";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";

import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyOTP from "../pages/VerifyOTP";

import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Authentication */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/verify-otp" element={<VerifyOTP />} />

      {/* Main App */}

      <Route
        path="*"
        element={
          <AppLayout>

            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/prediction" element={<Prediction />} />

              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/history" element={<History />} />

              <Route path="*" element={<NotFound />} />

            </Routes>

          </AppLayout>
        }
      />

    </Routes>
  );
}

export default AppRoutes;
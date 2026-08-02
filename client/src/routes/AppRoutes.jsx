import { Routes, Route } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import Home from "../pages/Home";
import Prediction from "../pages/Prediction";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <AppLayout>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/prediction" element={<Prediction />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/history" element={<History />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </AppLayout>
  );
}

export default AppRoutes;
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./pages/Layout";
import Service from "./pages/Service";
import CaraKerja from "./pages/CaraKerja";
import About from "./pages/About";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/carakerja" element={<CaraKerja />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

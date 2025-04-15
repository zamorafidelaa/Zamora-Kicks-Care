import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Home, Truck, Calendar, Info, User } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Anda telah logout!");
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-blue-100 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full" />
          <span className="text-xl font-bold text-blue-600">
            Zamora Kicks Care
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 ml-auto mr-4">
          <Link
            to="/home"
            className="flex items-center text-blue-700 hover:text-blue-900 transition-colors"
          >
            <Home size={18} className="mr-1" /> Home
          </Link>
          <Link
            to="/services"
            className="flex items-center text-blue-700 hover:text-blue-900 transition-colors"
          >
            <Truck size={18} className="mr-1" /> Services
          </Link>
          <Link
            to="/booking"
            className="flex items-center text-blue-700 hover:text-blue-900 transition-colors"
          >
            <Calendar size={18} className="mr-1" /> Booking
          </Link>
          <Link
            to="/carakerja"
            className="flex items-center text-blue-700 hover:text-blue-900 transition-colors"
          >
            <User size={18} className="mr-1" /> Cara Kerja
          </Link>
          <Link
            to="/about"
            className="flex items-center text-blue-700 hover:text-blue-900 transition-colors"
          >
            <Info size={18} className="mr-1" /> About
          </Link>
        </div>

        <button
          onClick={handleLogout}
          className="hidden md:block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Logout
        </button>

        <button onClick={toggleMenu} className="md:hidden text-blue-700">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-50 shadow-md px-4 py-4 space-y-2">
          <Link
            to="/home"
            onClick={toggleMenu}
            className="flex items-center text-blue-700 hover:text-blue-900 hover:font-semibold space-x-2"
          >
            <Home size={18} /> <span>Home</span>
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="flex items-center text-blue-700 hover:text-blue-900 hover:font-semibold space-x-2"
          >
            <Truck size={18} /> <span>Services</span>
          </Link>
          <Link
            to="/booking"
            onClick={toggleMenu}
            className="flex items-center text-blue-700 hover:text-blue-900 hover:font-semibold space-x-2"
          >
            <Calendar size={18} /> <span>Booking</span>
          </Link>
          <Link
            to="/carakerja"
            onClick={toggleMenu}
            className="flex items-center text-blue-700 hover:text-blue-900 hover:font-semibold space-x-2"
          >
            <User size={18} /> <span>Cara Kerja</span>
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="flex items-center text-blue-700 hover:text-blue-900 hover:font-semibold space-x-2"
          >
            <Info size={18} /> <span>About</span>
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="w-full text-left bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

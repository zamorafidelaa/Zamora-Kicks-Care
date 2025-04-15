import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        form
      );
      setMessage("Register berhasil! Silakan login.");
      navigate("/login");
    } catch (err) {
      setMessage(
        err.response?.data?.error || "Register gagal. Silakan coba lagi."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Register</h2>
        <input
          name="name"
          placeholder="Nama"
          onChange={handleChange}
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="mb-4 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Register
        </button>
        {message && (
          <p className="text-sm text-center mt-2 text-red-500">{message}</p>
        )}
        <p className="text-sm text-center mt-4 text-gray-600">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login di sini
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

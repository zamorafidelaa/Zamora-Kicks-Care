import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        form
      );
      setMessage('Register success!');
      console.log(res.data); // tampilkan user yang berhasil register
    } catch (err) {
      setMessage(err.response?.data?.error || 'Register failed');
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="mb-2 w-full p-2 border"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="mb-2 w-full p-2 border"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="mb-2 w-full p-2 border"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
        {message && (
          <p className="text-sm text-center mt-2 text-red-500">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Register;

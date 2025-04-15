import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ msg: 'Invalid email format' });
    }

    const passwordRegex = /^\d{6,}$/;
    if (!password || !passwordRegex.test(password)) {
      return res.status(400).json({ msg: 'Password must be at least 6 digits and numeric' });
    }

    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ msg: 'Email already registered' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, hashed, 'user']
    );

    res.status(201).json({ msg: 'Register success', user: result.rows[0] });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Something went wrong, please try again later' });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: 'Email and password are required' });
    }

    const passwordRegex = /^\d{6,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ msg: 'Password must be numeric and at least 6 digits' });
    }

    const result = await pool.query('SELECT id, email, password, role FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { user_id: user.id },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );
        
    res.json({ msg: 'Login success', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Something went wrong, please try again later' });
  }
};

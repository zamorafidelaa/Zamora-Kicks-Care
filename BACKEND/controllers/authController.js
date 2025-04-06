const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../models/db');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, email, hashed, role || 'user']
  );
  res.json(result.rows[0]);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  const user = result.rows[0];
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
};

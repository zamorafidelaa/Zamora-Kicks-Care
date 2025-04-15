import pool from '../config/db.js';

export const getAllServices = (req, res) => {
  const query = 'SELECT * FROM services'; 

  pool.query(query)
    .then(result => {
      res.json(result.rows); 
    })
    .catch(err => {
      console.error("Error fetching services:", err);
      res.status(500).json({ error: "Terjadi kesalahan saat mengambil layanan." });
    });
};

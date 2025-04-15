import pool from '../config/db.js';
import jwt from 'jsonwebtoken';

export const checkUserOrderLimit = async (userId) => {
  const query = 'SELECT COUNT(*) FROM orders WHERE user_id = $1';
  const result = await pool.query(query, [userId]);
  return parseInt(result.rows[0].count, 10);
};

export const createOrder = async (req, res) => {
  try {
    const userId = req.user.user_id;

    const countQuery = 'SELECT COUNT(*) FROM orders WHERE user_id = $1';
    const countResult = await pool.query(countQuery, [userId]);
    const orderCount = parseInt(countResult.rows[0].count, 10);

    if (orderCount >= 3) {
      return res.status(400).json({ error: "Maksimal 3 pesanan per user" });
    }

    const { service_id, name, address, shoe_brand } = req.body;

    if (!service_id || !name || !address || !shoe_brand) {
      return res.status(400).json({ error: "Data pesanan tidak lengkap" });
    }

    const insertQuery = `
      INSERT INTO orders (user_id, service_id, name, address, shoe_brand)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const values = [userId, service_id, name, address, shoe_brand];
    const result = await pool.query(insertQuery, values);

    return res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Gagal membuat pesanan:", err);
    return res.status(500).json({ error: "Gagal membuat pesanan" });
  }
};

// Get Orders milik user login
export const getOrdersForUser = async (req, res) => {
  try {
    const userId = req.user.user_id;

    const query = 'SELECT * FROM orders WHERE user_id = $1';
    const result = await pool.query(query, [userId]);

    return res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Terjadi kesalahan saat mengambil pesanan" });
  }
};

export const getAllOrders = async (req, res) => {
  const userId = req.user.user_id;

  try {
    const query = 'SELECT * FROM orders WHERE user_id = $1';
    const result = await pool.query(query, [userId]);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching orders');
  }
};

export const getOrderById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM orders WHERE id = $1';

  pool.query(query, [id])
    .then(result => {
      if (result.rows.length === 0) {
        return res.status(404).send('Order not found');
      }
      res.json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error fetching order');
    });
};

export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { service_id, name, address, shoe_brand } = req.body;
    const userId = req.user.user_id;
  
    try {
      const updateQuery = `
        UPDATE orders
        SET service_id = $1, name = $2, address = $3, shoe_brand = $4
        WHERE id = $5
        AND user_id = $6
        AND created_at > NOW() - INTERVAL '10 minutes'
        RETURNING *
      `;
  
      const result = await pool.query(updateQuery, [
        service_id,
        name,
        address,
        shoe_brand,
        id,
        userId,
      ]);
  
      if (result.rows.length === 0) {
        return res.status(400).json({
          error: "Tidak bisa mengedit pesanan setelah 10 menit atau bukan milik Anda",
        });
      }
  
      res.json({
        message: "Pesanan berhasil diperbarui",
        updatedOrder: result.rows[0],
      });
    } catch (err) {
      console.error("Gagal update pesanan:", err);
      res.status(500).json({ error: "Terjadi kesalahan saat memperbarui pesanan" });
    }
  };
  
  export const deleteOrder = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.user_id;
  
    try {
      const deleteQuery = `
        DELETE FROM orders
        WHERE id = $1
        AND user_id = $2
        AND created_at > NOW() - INTERVAL '10 minutes'
        RETURNING id
      `;
  
      const result = await pool.query(deleteQuery, [id, userId]);
  
      if (result.rows.length === 0) {
        return res.status(400).json({
          error: "Tidak bisa menghapus pesanan setelah 10 menit atau bukan milik Anda",
        });
      }
  
      res.json({
        message: "Pesanan berhasil dihapus",
        deletedOrderId: result.rows[0].id,
      });
    } catch (err) {
      console.error("Gagal menghapus pesanan:", err);
      res.status(500).json({ error: "Terjadi kesalahan saat menghapus pesanan" });
    }
  };
    
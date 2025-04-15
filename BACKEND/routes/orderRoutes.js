import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder
} from '../controllers/orderController.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post("/", createOrder);         // POST /api/orders
router.get('/', getAllOrders);         // GET /api/orders
router.get('/:id', getOrderById);      // GET /api/orders/:id
router.put('/:id', updateOrder);       // PUT /api/orders/:id
router.delete('/:id', deleteOrder);    // DELETE /api/orders/:id

export default router;

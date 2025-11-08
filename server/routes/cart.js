import express from 'express';
import {
  getCartItems,
  addCartItem,
  removeCartItem,
} from '../controllers/cartController.js';

const router = express.Router();

router.get('/', getCartItems);
router.post('/', addCartItem);
router.delete('/:id', removeCartItem);

export default router;
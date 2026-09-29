import express from 'express';
import { getWishlist, saveWishlist } from '../controllers/wishlistController.js';

const router = express.Router();

router.get('/:userId', getWishlist);
router.post('/', saveWishlist);

export default router;
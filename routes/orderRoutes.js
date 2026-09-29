import express from 'express';
import { createOrder } from '../controllers/orderController.js';
import { trackOrder } from '../controllers/orderController.js';
import { getUserOrders } from '../controllers/orderController.js';
import { updateOrderStatus } from '../controllers/orderController.js';
import { getOrderById } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', (next)=> {
    console.log("Received request to create order in orderRoutes.js");
    next();
}, createOrder);
router.post('/track', trackOrder);
router.get('/user/:userId', getUserOrders);
router.get('/:orderId', getOrderById);
router.put('/:orderId/status', updateOrderStatus);

export default router;
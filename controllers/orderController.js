import Order from '../models/orderModel.js';

export const createOrder = async (req, res) => {
  try {
    const orders = await Order.create(req.body);
    console.log('Order created successfully:', orders);
    res.status(201).json({ 
        success: true, 
        message: 'Order created successfully', 
        orders,
    });
  } catch (err) {
    res.status(500).json({ 
        success: false, 
        message: err.message });
  }
};

export const trackOrder = async (req, res) => {
  try {
    const { _id, email } = req.body;
    const order = await Order.findOne({
      _id: Number(_id),
      // 'customer.email': email
    });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found. Please check your Order ID and email.',
      });
    } 
    res.status(200).json({
      success: true,
      message: 'Order found successfully',
      order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const {userId} = req.params;
    const orders = await Order.find ({userId}).sort ({ createdAt: -1});
    res.status(200).json({
      success: true,
      message: 'Orders retrieved successfully',
      orders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const order = await Order.findOne({
      _id: Number(orderId),
      // "customer.email": email
    });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }
    order.status = status;
    order.tracking.push({ status, date: new Date() });
    await order.save();
    res.status(200).json({
      success: true,
      message: 'Order status updated successfully',
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(Number(orderId));
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
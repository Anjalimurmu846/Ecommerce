import Order from "../models/OrderSchema.js";
import Cart from "../models/CartSchema.js";


export const placeOrder = async (req, res) => {
  try {
    const { user_id } = req.body;

    const cartItems = await Cart.find({
      user_id,
      isOrdered: false
    }).populate("product");

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const orderItems = cartItems.map(item => ({
      product_id: item.product._id,
      qty: item.quantity
    }));

    let amount = 0;
    cartItems.forEach(item => {
      amount += item.quantity * item.product.price;
    });

    const order = new Order({
      user_id,
      cart_items: orderItems,
      amount
    });

    await order.save();

    await Cart.updateMany(
      { user_id },
      { isOrdered: true }
    );

    res.status(200).json({
      message: "Order placed successfully",
      order
    });

  } catch (error) {
    console.error(error);
  }
};


export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.params.userId })
      .populate("cart_items.product_id");

    res.status(200).json(orders);

  } catch (error) {
    console.error(error);
  }
};


export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({
      message: "Order updated",
      order
    });

  } catch (error) {
    console.error(error);
  }
};
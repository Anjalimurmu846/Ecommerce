import Cart from "../models/CartSchema.js";


export const addToCart = async (req, res) => {
  try {
    const { user_id, product, quantity } = req.body;

    const cartItem = new Cart({
      user_id,
      product,
      quantity
    });

    await cartItem.save();

    res.status(200).json({
      message: "Item added to cart",
      cartItem
    });

  } catch (error) {
    console.error(error);
  }
};


export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ user_id: req.params.userId })
      .populate("product");

    res.status(200).json(cart);

  } catch (error) {
    console.error(error);
  }
};

  
export const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Item removed from cart"
    });

  } catch (error) {
    console.error(error);
  }
};
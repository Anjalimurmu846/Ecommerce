import Product from "../models/ProductSchema.js";


export const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(200).json({
      message: "Product added successfully",
      product
    });

  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category")
      .populate("sub_category");

    res.status(200).json(products);

  } catch (error) {
    console.error(error);
  }
};


export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("category")
      .populate("sub_category");

    res.status(200).json(product);

  } catch (error) {
    console.error(error);
  }
};


export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product deleted successfully"
    });

  } catch (error) {
    console.error(error);
  }
};
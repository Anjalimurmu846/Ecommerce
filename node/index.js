import express from "express";
import userRoute from "./routes/userRoute.js";

import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import mongoose from "mongoose";

const app = express();   

app.use(express.json()); 


app.use('/user', userRoute);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);



 app.get('/', (req, res) => {
  res.status(200).json({ msg: "API IS RUNNING .........." });
});

 const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Anjali:1234@cluster0.l0eevlt.mongodb.net/?appName=Cluster0"
    );

    console.log("Database Connected.................");

    app.listen(3000, () => {
      console.log("Server is running on 3000.....................");
    });

  } catch (error) {
    console.error(error);
  }
};

startServer();
 

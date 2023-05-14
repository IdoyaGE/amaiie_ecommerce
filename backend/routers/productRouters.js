import express from "express";
import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler"; //Librería importada para la ruta del Sidebar

const productRouter = express.Router();
productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

//Ruta del Sidebar
//const PAGE_SIZE = 3; //por defecto 3 páginas
productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.send(products); //para enviar al frontend
  })
);

productRouter.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: { $eq: req.params.slug } });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

export default productRouter;

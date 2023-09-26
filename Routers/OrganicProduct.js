const express = require("express");
const productRouter = express.Router();
const {
    getAllProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
} = require("../Controllers/OrganicProduct");
// get all and post a product
productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
// get single product with update and delete
productRouter
    .route("/:id")
    .get(getSingleProduct)
    .put(updateProduct)
    .delete(deleteProduct);
module.exports = productRouter;

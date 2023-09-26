const OrganicProduct = require("../Models/OrganicProduct");

const getAllProducts = async (req, res) => {
    console.log(req.body, " and it is ")
    try {
        const product = await OrganicProduct.find()
        console.log(product, " it is a product")
        res.json(product)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = new OrganicProduct(req.body)
        const saved = await newProduct.save()
        res.status(201).json({ saved })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
};

// get a single product
const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await OrganicProduct.findById(id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update a single product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await OrganicProduct.findByIdAndUpdate(id)
        if (!product) {
            return res.status(400).json({ message: "Product not added" })
        }
        if (req.body.name !== undefined) {
            product.name = req.body.name;
        }
        if (req.body.name === null) {
            return res.status(409).send("Name cannot be empty!")
        }
        const products = await product.save();
        res.json(products)

    }
    catch (error) {
        res.status(500).json({ message: error })
    }
};


// delete a single product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await OrganicProduct.findByIdAndDelete(id)
        if (!product) {
            return res.status(400).json({ message: "Product not deleted" })
        }
        // product.
        res.json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
};

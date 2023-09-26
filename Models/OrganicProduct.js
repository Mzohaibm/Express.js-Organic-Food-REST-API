const mongoose = require("mongoose");

const OrganicProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "zohaib",
        trim: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: false,
    },
}, { collection: 'OrganicProducts' });

// here am creating new collection for organic
// this model allow us to ineract with database using this Schema
const OrganicProduct = mongoose.model("OrganicProduct", OrganicProductSchema)
module.exports = OrganicProduct
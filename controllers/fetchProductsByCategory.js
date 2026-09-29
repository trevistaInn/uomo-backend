import Product from "../models/productModel.js";

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

async function fetchProductsByCategory(req, res) {
    try {
        const category = req.params.category?.trim();
        if (!category) {
            return res.status(400).json({
                message: "Category parameter is required.",
            });
        }

        const escapedCategory = escapeRegex(category);
        const regex = new RegExp(escapedCategory, "i");

        const products = await Product.find({
            $or: [
                { gender: regex },
                { style: regex },
                { type: regex },
                { brand: regex },
            ],
        });

        return res.json({
            products,
        });
    } catch (error) {
        console.error("fetchProductsByCategory error:", error);
        return res.status(500).json({
            message: error.message || "Failed to fetch category products.",
        });
    }
}

export default fetchProductsByCategory;
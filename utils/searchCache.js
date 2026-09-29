import Product from "../models/productModel.js";

export const searchCache = {
    brands: [],
    styles: [],
    colors: [],
    genders: [],
    sizes: [],
};

export async function loadSearchCache() {
    const [brands, styles, genders] = await Promise.all([
        Product.distinct("brand"),
        Product.distinct("style"),
        Product.distinct("gender"),
    ]);

    const colorArrays = await Product.distinct("color");
    const sizeArrays = await Product.distinct("size");

    searchCache.brands = brands;
    searchCache.styles = styles;
    searchCache.genders = genders;
    searchCache.colors = [...new Set(colorArrays.flat())];
    searchCache.sizes = [...new Set(sizeArrays.flat())];
}
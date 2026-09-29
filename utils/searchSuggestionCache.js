import Product from "../models/productModel.js";

export const searchSuggestionCache = [];

export async function loadSearchSuggestionCache() {
    const products = await Product.find(
        {},
        {
            brand: 1,
            style: 1,
            gender: 1,
            color: 1,
            size: 1,
        }
    ).lean();

    const suggestions = new Map();

    function addSuggestion(text, type, priority) {
        if (!text) return;

        const normalizedText = text.trim();

        if (!normalizedText) return;

        const existing = suggestions.get(normalizedText);

        if (!existing || priority < existing.priority) {
            suggestions.set(normalizedText, {
                text: normalizedText,
                type,
                priority,
            });
        }
    }

    for (const product of products) {
        const {
            brand,
            style,
            gender,
            color = [],
            size = [],
        } = product;

        // Individual searchable terms
        addSuggestion(brand, "brand", 1);
        addSuggestion(style, "style", 1);
        addSuggestion(gender, "gender", 1);

        color.forEach((value) => {
            addSuggestion(value, "color", 1);
        });

        size.forEach((value) => {
            addSuggestion(value, "size", 1);
        });

        // Brand + style
        if (brand && style) {
            addSuggestion(
                `${brand} ${style}`,
                "brand_style",
                2
            );
        }

        // Gender + style
        if (gender && style) {
            addSuggestion(
                `${gender} ${style}`,
                "gender_style",
                3
            );
        }

        // Brand + gender
        if (brand && gender) {
            addSuggestion(
                `${brand} ${gender}`,
                "brand_gender",
                4
            );
        }

        // Brand + gender + style
        if (brand && gender && style) {
            addSuggestion(
                `${brand} ${gender} ${style}`,
                "brand_gender_style",
                5
            );
        }
    }

    searchSuggestionCache.length = 0;
    for (const suggestion of suggestions.values()) {
        searchSuggestionCache.push(suggestion);
    }
}
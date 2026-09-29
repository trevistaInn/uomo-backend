import Product from "../models/productModel.js";
import parseSearchQuery from "../utils/parseSearchQuery.js";
import buildMatchStage from "../utils/buildMatchStage.js";

async function fetchProductsBySearch(req, res) {
    try {
        const search = req.query.q?.trim();
        if (!search) {
            return res.status(400).json({
                message: "Search query is required.",
            });
        }
        const { filters, remainingSearch } = parseSearchQuery(search);
        const pipeline = [];

        if (remainingSearch) {
            pipeline.push({
                $search: {
                    index: "product-search-v2",
                    text: {
                        query: remainingSearch,
                        path: [
                            "brand",
                            "description",
                            "style",
                            "type",
                            "gender",
                            "color",
                            "size",
                        ],
                        fuzzy: {
                            maxEdits: 1,
                        },
                    },
                },
            });
        }

        const matchStage = buildMatchStage(filters);
        if (matchStage) {
            pipeline.push({
                $match: matchStage,
            });
        }

        pipeline.push({
            $facet: {
                products: [],
                brands: [
                    {
                        $group: {
                            _id: "$brand",
                            count: {
                                $sum: 1,
                            },
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            brand: "$_id",
                            count: 1,
                        },
                    },
                    {
                        $sort: {
                            count: -1,
                            brand: 1,
                        },
                    },
                ],
                styles: [
                    {
                        $group: {
                            _id: "$style",
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            style: "$_id",
                        },
                    },
                    {
                        $sort: {
                            style: 1,
                        },
                    },
                ],
                colors: [
                    {
                        $unwind: "$color",
                    },
                    {
                        $group: {
                            _id: "$color",
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            color: "$_id",
                        },
                    },
                    {
                        $sort: {
                            color: 1,
                        },
                    },
                ],
                sizes: [
                    {
                        $unwind: "$size",
                    },
                    {
                        $group: {
                            _id: "$size",
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            size: "$_id",
                        },
                    },
                    {
                        $sort: {
                            size: 1,
                        },
                    },
                ],
                price: [
                    {
                        $group: {
                            _id: null,
                            minPrice: { $min: "$price" },
                            maxPrice: { $max: "$price" },
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            minPrice: 1,
                            maxPrice: 1,
                        },
                    },
                ],
            },
        });

        const aggregateResult = await Product.aggregate(pipeline);
        const result = aggregateResult[0] || {};

        const response = {
            products: result.products || [],
            filters: {},
        };

        if (filters.brand) {
            response.filters.brands = result.brands?.[0] ?? null;
        } else {
            response.filters.brands = result.brands || [];
        }

        if (!filters.style) {
            response.filters.styles = (result.styles || []).map(
                ({ style }) => style
            );
        }

        if (!filters.color) {
            response.filters.colors = (result.colors || []).map(
                ({ color }) => color
            );
        }

        if (!filters.size) {
            response.filters.sizes = (result.sizes || []).map(
                ({ size }) => size
            );
        }

        response.filters.price = result.price?.[0] ?? {
            minPrice: 0,
            maxPrice: 0,
        };

        return res.json(response);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: error.message,
        });
    }
}

export default fetchProductsBySearch;
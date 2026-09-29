import buildSearchSuggestions from "../utils/buildSearchSuggestions.js";

async function fetchSearchSuggestions(req, res) {
    try {
        const search = req.query.q?.trim();

        if (!search) {
            return res.json([]);
        }

        const suggestions = buildSearchSuggestions(search);

        return res.json(suggestions);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: error.message,
        });
    }
}

export default fetchSearchSuggestions;
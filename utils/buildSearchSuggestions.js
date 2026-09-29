import { searchSuggestionCache } from "./searchSuggestionCache.js";

function normalize(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
}

export default function buildSearchSuggestions(search) {
    const query = normalize(search);

    if (!query) {
        return [];
    }

    return searchSuggestionCache
        .filter(({ text }) =>
            normalize(text).startsWith(query)
        )
        .sort((a, b) => {
            const aText = normalize(a.text);
            const bText = normalize(b.text);

            // Exact match first
            if (aText === query && bText !== query) {
                return -1;
            }

            if (bText === query && aText !== query) {
                return 1;
            }

            // Then use our explicit priority
            if (a.priority !== b.priority) {
                return a.priority - b.priority;
            }

            // Finally, shorter suggestion first
            return aText.length - bText.length;
        })
        .slice(0, 10)
        .map(({ text }) => text);
}
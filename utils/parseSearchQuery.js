import { searchCache } from "./searchCache.js";

const PRICE_REGEX =
    /(under|below|less than)\s+(\d+)/i;

function normalize(text) {
    if (!text) return "";
    return text
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function removePhrase(text, phrase) {
    if (!text || !phrase) return text || "";
    const escaped = escapeRegex(phrase);
    return text
        .replace(new RegExp(`\\b${escaped}\\b`, "i"), " ")
        .replace(/\s+/g, " ")
        .trim();
}

function extractFilter(search, values) {
    if (!search || !values || !values.length) {
        return {
            value: null,
            remainingSearch: search || "",
        };
    }

    const normalizedSearch = normalize(search);

    const sortedValues = [...values].sort(
        (a, b) => (b?.length || 0) - (a?.length || 0)
    );

    for (const value of sortedValues) {
        if (!value) continue;
        const normalizedValue = normalize(value);
        if (!normalizedValue) continue;

        const escaped = escapeRegex(normalizedValue);
        const regex = new RegExp(`\\b${escaped}\\b`, "i");

        if (regex.test(normalizedSearch)) {
            return {
                value,
                remainingSearch: removePhrase(
                    search,
                    normalizedValue
                ),
            };
        }
    }

    return {
        value: null,
        remainingSearch: search,
    };
}

export default function parseSearchQuery(search) {
    let remainingSearch = normalize(search);

    const filters = {
        brand: null,
        style: null,
        gender: null,
        color: null,
        size: null,
        maxPrice: null,
    };

    const priceMatch = remainingSearch.match(PRICE_REGEX);

    if (priceMatch) {
        filters.maxPrice = Number(priceMatch[2]);

        remainingSearch = remainingSearch
            .replace(PRICE_REGEX, "")
            .trim();
    }

    let result = extractFilter(
        remainingSearch,
        searchCache.brands
    );

    filters.brand = result.value;
    remainingSearch = result.remainingSearch;

    result = extractFilter(
        remainingSearch,
        searchCache.styles
    );

    filters.style = result.value;
    remainingSearch = result.remainingSearch;

    result = extractFilter(
        remainingSearch,
        searchCache.genders
    );

    filters.gender = result.value;
    remainingSearch = result.remainingSearch;

    result = extractFilter(
        remainingSearch,
        searchCache.colors
    );

    filters.color = result.value;
    remainingSearch = result.remainingSearch;

    result = extractFilter(
        remainingSearch,
        searchCache.sizes
    );

    filters.size = result.value;
    remainingSearch = result.remainingSearch;

    return {
        filters,
        remainingSearch: normalize(remainingSearch),
    };
}
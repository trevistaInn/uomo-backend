function buildMatchStage(filters) {
    const matchStage = {};

    if (filters.brand) {
        matchStage.brand = filters.brand;
    }

    if (filters.style) {
        matchStage.style = filters.style;
    }

    if (filters.gender) {
        matchStage.gender = filters.gender;
    }

    if (filters.color) {
        matchStage.color = filters.color;
    }

    if (filters.size) {
        matchStage.size = filters.size;
    }

    if (filters.maxPrice !== null) {
        matchStage.price = {
            $lte: filters.maxPrice,
        };
    }

    return Object.keys(matchStage).length ? matchStage : null;
}

export default buildMatchStage;
const { Listing } = require('../models');

module.exports = {
    FilterListings: async (call, callback) => {
        const { location, minPrice, maxPrice, minRating } = call.request;
        try {
            const listings = await Listing.findAll({
                where: {
                    location,
                    price: { [Op.between]: [minPrice, maxPrice] },
                    rating: { [Op.gte]: minRating },
                },
            });
            callback(null, { listings });
        } catch (error) {
            callback(error);
        }
    },
};

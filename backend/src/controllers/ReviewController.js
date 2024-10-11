const { Review } = require('../models');

module.exports = {
    AddReview: async (call, callback) => {
        const { userId, listingId, rating, comment } = call.request;
        try {
            await Review.create({ userId, listingId, rating, comment });
            callback(null, { success: true, message: 'Review added successfully' });
        } catch (error) {
            callback(error);
        }
    },
    GetReviews: async (call, callback) => {
        const { listingId } = call.request;
        try {
            const reviews = await Review.findAll({ where: { listingId } });
            callback(null, { reviews });
        } catch (error) {
            callback(error);
        }
    },
};

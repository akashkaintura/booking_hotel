const grpc = require('@grpc/grpc-js');
const { Booking } = require('../models');
const emailService = require('../utils/emailService');

module.exports = {
    CreateBooking: async (call, callback) => {
        const { userId, listingId, date } = call.request;
        try {
            const booking = await Booking.create({ userId, listingId, date, status: 'confirmed' });
            const user = await User.findByPk(userId);
            await emailService.sendBookingNotification(user.email, 'Booking Confirmation', 'Your booking is confirmed!');

            callback(null, { success: true, message: 'Booking created successfully' });
        } catch (error) {
            callback(error);
        }
    },
    GetBooking: async (call, callback) => {
        const { bookingId } = call.request;
        try {
            const booking = await Booking.findByPk(bookingId);
            callback(null, { ...booking.dataValues });
        } catch (error) {
            callback(error);
        }
    },
};

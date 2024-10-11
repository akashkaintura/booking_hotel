const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
    ProcessPayment: async (call, callback) => {
        const { userId, amount, currency, paymentMethodId } = call.request;
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100, // Amount in cents
                currency,
                payment_method: paymentMethodId,
                confirm: true,
            });
            callback(null, { success: true, message: 'Payment processed successfully' });
        } catch (error) {
            callback({ success: false, message: error.message });
        }
    },
};

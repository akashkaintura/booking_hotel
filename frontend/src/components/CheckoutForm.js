import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button, Typography } from '@material-ui/core';
import axios from 'axios';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            const { id } = paymentMethod;
            const response = await axios.post('/api/payments', {
                paymentMethodId: id,
                amount: 1000, // Example amount
                currency: 'usd',
            });

            if (response.data.success) {
                alert('Payment successful!');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6">Complete your payment</Typography>
            <CardElement />
            <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
                Pay
            </Button>
        </form>
    );
};

export default CheckoutForm;

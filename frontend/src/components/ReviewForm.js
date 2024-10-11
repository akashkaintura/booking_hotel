import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import axios from 'axios';

const ReviewForm = ({ listingId, onReviewAdded }) => {
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async () => {
        const response = await axios.post('/api/reviews', {
            listingId,
            rating: parseInt(rating),
            comment,
        });
        if (response.data.success) {
            onReviewAdded();
        }
    };

    return (
        <div>
            <Typography variant="h6">Leave a Review</Typography>
            <TextField label="Rating" type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
            <TextField label="Comment" value={comment} onChange={(e) => setComment(e.target.value)} multiline rows={4} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit Review
            </Button>
        </div>
    );
};

export default ReviewForm;

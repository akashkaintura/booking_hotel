import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';

const ListingDetails = ({ match }) => {
    const { id } = match.params;
    const [listing, setListing] = useState(null);
    const [reviews, setReviews] = useState([]);

    const fetchListing = async () => {
        const response = await axios.get(`/api/listings/${id}`);
        setListing(response.data);
    };

    const fetchReviews = async () => {
        const response = await axios.get(`/api/reviews/${id}`);
        setReviews(response.data.reviews);
    };

    useEffect(() => {
        fetchListing();
        fetchReviews();
    }, [id]);

    return (
        <Container>
            {listing && (
                <>
                    <Typography variant="h4">{listing.title}</Typography>
                    <Typography>{listing.description}</Typography>
                    <Typography>{`$${listing.price}`}</Typography>
                    <Typography variant="h5">Reviews</Typography>
                    <List>
                        {reviews.map((review) => (
                            <ListItem key={review.id}>
                                <ListItemText primary={`Rating: ${review.rating}`} secondary={review.comment} />
                            </ListItem>
                        ))}
                    </List>
                    <ReviewForm listingId={id} onReviewAdded={fetchReviews} />
                </>
            )}
        </Container>
    );
};

export default ListingDetails;

import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [listings, setListings] = useState([]);

    const fetchListings = async (filters = {}) => {
        const response = await axios.post('/api/listings/search', filters);
        setListings(response.data.listings);
    };

    useEffect(() => {
        fetchListings();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Available Listings</Typography>
            <SearchBar onSearch={fetchListings} />
            <Grid container spacing={3}>
                {listings.map((listing) => (
                    <Grid item key={listing.id} xs={12} sm={6} md={4}>
                        <Typography variant="h6">{listing.title}</Typography>
                        <Typography>{listing.description}</Typography>
                        <Typography>{`$${listing.price}`}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;

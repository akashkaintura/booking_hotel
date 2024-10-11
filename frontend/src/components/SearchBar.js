import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';

const SearchBar = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minRating, setMinRating] = useState('');

    const handleSearch = () => {
        onSearch({ location, minPrice, maxPrice, minRating });
    };

    return (
        <Container>
            <Typography variant="h6">Filter Listings</Typography>
            <TextField label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <TextField label="Min Price" type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <TextField label="Max Price" type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            <TextField label="Min Rating" type="number" value={minRating} onChange={(e) => setMinRating(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
        </Container>
    );
};

export default SearchBar;

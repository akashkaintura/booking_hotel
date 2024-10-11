import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';

const Profile = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await axios.get(`/api/user/bookings`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setBookings(response.data.bookings);
        };

        fetchBookings();
    }, []);

    return (
        <Container>
            <Typography variant="h4">My Bookings</Typography>
            <List>
                {bookings.map((booking) => (
                    <ListItem key={booking.id}>
                        <ListItemText
                            primary={`Listing: ${booking.listingId}`}
                            secondary={`Date: ${booking.date} | Status: ${booking.status}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Profile;

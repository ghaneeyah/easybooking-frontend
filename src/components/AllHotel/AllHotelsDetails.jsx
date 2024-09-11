import React, { useState, useEffect, useContext } from 'react';
import { useEcom } from '../context/EcomContext';
import axios from 'axios';

function UserBookings  ()  {
    const { currentUser } = useEcom(); // Fetch the current user from context
    const [bookings, setBookings] = useState([]); // State to store the booking data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors

    // Fetch user's bookings when the component mounts
    useEffect(() => {
        const fetchUserBookings = async () => {
            if (!currentUser) {
                setError('User is not logged in');
                setLoading(false);
                return;
            }

            try {
                const token = localStorage.getItem('token'); // Retrieve token from local storage
                if (!token) {
                    throw new Error('No authentication token found');
                }

                const response = await axios.get('https://hotel-api-3o4k.onrender.com/api/bookings/bookings', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log('User bookings:', response.data);
                
                setBookings(response.data.bookings); // Set bookings data from API response
            } catch (err) {
                console.error('Error fetching user bookings:', err.message);
                setError(err.message || 'An error occurred while fetching bookings');
            } finally {
                setLoading(false);
            }
        };

        fetchUserBookings();
    }, [currentUser]);

    

    if (loading) return <div>Loading booking information...</div>; // Display loading message

    if (error) return <div>Error: {error}</div>; // Display error message

    if (bookings.length === 0) return <div>No bookings found.</div>; // Handle case with no bookings

    // Render booking information
    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
            {bookings.map((booking) => (
                <div key={booking._id} className="mb-6 border-b border-gray-200 pb-4">
                    <p><strong>Hotel:</strong> {booking.hotelId?.name || 'Unknown'}</p>
                    <p><strong>Room Type:</strong> {booking.roomType}</p>
                    <p><strong>Check-In Date:</strong> {new Date(booking.checkInDate).toLocaleDateString()}</p>
                    <p><strong>Check-Out Date:</strong> {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                    <p><strong>Guests:</strong> {booking.guests}</p>
                    <p><strong>Total Price:</strong> ₦{booking.totalPrice}</p>
                    <p><strong>Guest Name:</strong> {booking.userName}</p>
                    <p><strong>Email:</strong> {booking.email || 'N/A'}</p>
                    <p><strong>Phone:</strong> {booking.phone || 'N/A'}</p>
                </div>
            ))}
        </div>
    );
};

export default UserBookings;

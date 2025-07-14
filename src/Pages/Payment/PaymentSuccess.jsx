import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar/Navbar';

const PaymentSuccess = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const orderId = searchParams.get("orderId");

    return (
        <>
            <Navbar />
            <Box textAlign="center" mt={20}>
                <Heading color="teal.500">Payment Successful 🎉</Heading>
                <Text fontSize="xl" mt={4}>Thank you for your order.</Text>
                <Text fontSize="lg" mt={2}>Your order ID is: <strong>{orderId}</strong></Text>
            </Box>
        </>
    );
};

export default PaymentSuccess;

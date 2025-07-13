import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const PaymentFailure = () => {
    return (
        <Box textAlign="center" mt={20}>
            <Heading color="red.500">Payment Failed ❌</Heading>
            <Text fontSize="xl" mt={4}>We couldn’t complete your payment.</Text>
            <Text fontSize="lg" mt={2}>Please try again or choose another payment method.</Text>
        </Box>
    );
};

export default PaymentFailure;

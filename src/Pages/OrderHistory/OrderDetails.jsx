import React, { useEffect, useState } from "react";
import {
    Box,
    Text,
    Heading,
    Image,
    Stack,
    Grid,
    useColorModeValue,
    Spinner,
    Divider,
    Flex,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const OrderDetails = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    // Theme-aware styles
    const bg = useColorModeValue("whiteAlpha.900", "gray.800");
    const textColor = useColorModeValue("gray.800", "gray.100");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const highlight = useColorModeValue("teal.600", "teal.300");
    const itemBg = useColorModeValue("gray.50", "gray.700");

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/orders/${orderId}`, {
                    method: "GET",
                    credentials: "include",
                });

                const data = await res.json();
                if (data.success) {
                    setOrder(data.order);
                }
            } catch (err) {
                console.error("Failed to fetch order", err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderId]);

    if (loading) return <Spinner size="xl" mt={10} />;

    if (!order) return <Text textAlign="center" mt={10}>Order not found</Text>;

    const items = order.cartId?.items || [];

    return (
        <Box>
            <Navbar />
            <Box
                p={6}
                maxW="90%"
                m="auto"
                mt={6}
                bg={bg}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="md"
            >
                <Heading mb={4}>Order Details</Heading>

                <Text fontWeight="bold" color={highlight}>
                    Order ID: {order._id}
                </Text>
                <Text color={textColor}>
                    Placed on: {new Date(order.placedAt).toLocaleString()}
                </Text>
                <Text color={textColor}>
                    Status: <Text as="span" color={highlight}>{order.orderStatus}</Text>
                </Text>

                <Divider my={4} borderColor={borderColor} />

                <Text fontWeight="bold" mb={2}>Items in this order:</Text>
                <Stack spacing={4}>
                    {items.map((item, idx) => {
                        const product = item.productId;
                        const variant = item.variantId;
                        const image = variant?.images?.[0] || "https://via.placeholder.com/150";

                        return (
                            <Grid
                                key={item._id || idx}
                                templateColumns={{ base: "1fr", md: "150px 1fr" }}
                                gap={4}
                                p={3}
                                border="1px solid"
                                borderColor={borderColor}
                                borderRadius="md"
                                bg={itemBg}
                            >
                                <Image
                                    src={image}
                                    alt={product?.name || "Product Image"}
                                    maxW="150px"
                                    borderRadius="md"
                                    objectFit="cover"
                                />
                                <Box color={textColor}>
                                    <Text><strong>Product:</strong> {product?.name || "N/A"}</Text>
                                    <Text><strong>Style:</strong> {product?.frameStyle || "N/A"}</Text>
                                    <Text><strong>Variant:</strong> {variant?.frameColor || "N/A"}</Text>
                                    <Text><strong>Size:</strong> {variant?.size || "N/A"}</Text>
                                    <Text><strong>Quantity:</strong> {item.quantity}</Text>
                                    <Text>
                                        <strong>Subtotal:</strong> ₹
                                        {variant?.price ? (variant.price * item.quantity).toFixed(2) : "N/A"}
                                    </Text>
                                </Box>
                            </Grid>
                        );
                    })}
                </Stack>

                <Divider my={6} borderColor={borderColor} />

                <Box color={textColor}>
                    <Text fontWeight="bold" mb={2}>Shipping Info:</Text>
                    <Text>{order.name}</Text>
                    <Text>{order.address}, {order.city}, {order.state} - {order.pincode}</Text>
                    <Text>{order.country}</Text>
                    <Text>Phone: {order.phone}</Text>
                </Box>

                <Divider my={6} borderColor={borderColor} />

                <Flex align="center">
                    <Text fontWeight="bold" fontSize="lg">Total Amount:&nbsp;</Text>
                    <Text fontWeight="bold" fontSize="lg" color={highlight}>
                        ₹{Number(order.totalAmount).toFixed(2)}
                    </Text>
                </Flex>
            </Box>
            <Footer />
        </Box>
    );
};

export default OrderDetails;

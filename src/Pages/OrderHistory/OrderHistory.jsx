import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Stack,
  Heading,
  Image,
  Grid,
  useColorModeValue,
  Flex,
  Divider,
} from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  const bg = useColorModeValue("whiteAlpha.900", "gray.800");
  // const boxBg = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const highlightColor = useColorModeValue("teal.600", "teal.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let HOST = process.env.REACT_APP_HOST;
        const response = await fetch(`${HOST}/api/orders`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          console.error("Failed to fetch orders");
          return;
        }

        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Box>
      <Navbar />
      <Box
        minHeight="635"
        p={8}
        w={{ lg: "70%", md: "70%", sm: "98%", base: "98%" }}
        m="auto"
      >
        <Heading
          fontSize="25px"
          mt="1%"
          textAlign="left"
          p="2"
          bg="teal.400"
          color="whiteAlpha.900"
        >
          Order History
        </Heading>

        {orders.length === 0 ? (
          <Text
            textAlign="center"
            fontSize="28px"
            color="gray"
            mt="1%"
            fontWeight="bolder"
          >
            No Order History Found
          </Text>
        ) : (
          <Stack spacing={6} mt={4}>
            {orders.map((order) => {
              const firstItem = order.cartId?.items?.[0];
              const variant = firstItem?.variantId;
              const product = firstItem?.productId;
              const image = variant?.images?.[0] || "https://via.placeholder.com/150";

              return (
                <Grid
                  key={order._id}
                  templateColumns={{ base: "1fr", md: "30% 70%" }}
                  bg={bg}
                  border="1px solid"
                  borderColor={borderColor}
                  borderRadius="md"
                  p={4}
                  gap={6}
                  boxShadow="md"
                >
                  {/* Image */}
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <Box
                      as="a"
                      href={`/orders/${order._id}`}
                      cursor="pointer"
                      title="Show product details"
                      _hover={{ transform: "scale(1.03)" }}
                      transition="transform 0.2s"
                    >
                      <Image
                        src={image}
                        alt={product?.name || "Product"}
                        borderRadius="md"
                        maxW="150px"
                        objectFit="cover"
                      />
                    </Box>

                  </Box>

                  {/* Order Details */}
                  <Box color={textColor}>
                    <Text fontWeight="bold" fontSize="lg" mb={2}>
                      {product?.name || "Unnamed Product"}
                    </Text>

                    <Text fontSize="sm">
                      <strong>Order ID:</strong> {order._id}
                    </Text>
                    <Text fontSize="sm">
                      <strong>Status:</strong>{" "}
                      <Text as="span" color={highlightColor}>
                        {order.orderStatus}
                      </Text>
                    </Text>
                    <Text fontSize="sm">
                      <strong>Placed At:</strong>{" "}
                      {new Date(order.placedAt).toLocaleDateString()}
                    </Text>

                    <Divider my={2} borderColor={borderColor} />

                    <Text fontSize="sm">
                      <strong>Shipping To:</strong>
                      <br />
                      {order.name}, {order.address}, {order.city}, {order.state},{" "}
                      {order.country} - {order.pincode}
                    </Text>
                    <Text fontSize="sm">
                      <strong>Phone:</strong> {order.phone}
                    </Text>

                    <Divider my={2} borderColor={borderColor} />

                    <Flex align="center">
                      <Text fontWeight="bold" fontSize="md">
                        Total Paid: &nbsp;
                      </Text>
                      <Text fontWeight="bold" fontSize="lg" color={highlightColor}>
                        ₹{Number(order.totalAmount).toFixed(2)}
                      </Text>
                    </Flex>
                  </Box>
                </Grid>
              );
            })}
          </Stack>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default OrderHistory;

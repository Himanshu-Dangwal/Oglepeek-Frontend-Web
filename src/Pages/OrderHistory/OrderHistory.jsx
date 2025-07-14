// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Text,
//   Stack,
//   Heading,
//   Image,
//   Grid,
//   useColorModeValue,
//   Flex,
//   Divider,
//   Button,
// } from "@chakra-ui/react";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
// import { useNavigate } from "react-router-dom";

// const OrderHistory = () => {
//   const navigate = useNavigate();
//   const [orders, setOrders] = useState([]);

//   const bg = useColorModeValue("whiteAlpha.900", "gray.800");
//   const textColor = useColorModeValue("gray.700", "gray.200");
//   const highlightColor = useColorModeValue("teal.600", "teal.300");
//   const borderColor = useColorModeValue("gray.200", "gray.600");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         let HOST = process.env.REACT_APP_HOST;
//         const response = await fetch(`${HOST}/api/orders`, {
//           method: "GET",
//           credentials: "include",
//         });

//         if (!response.ok) {
//           console.error("Failed to fetch orders");
//           return;
//         }

//         const data = await response.json();
//         setOrders(data.orders);
//       } catch (error) {
//         console.error("Failed to fetch orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // Filter out "Pending" orders with empty cart
//   const validOrders = orders.filter((order) => {
//     if (order.orderStatus === "Pending") {
//       return order.cartId?.items?.length > 0;
//     }
//     return true;
//   });

//   return (
//     <Box>
//       <Navbar />
//       <Box
//         minHeight="635"
//         p={8}
//         w={{ lg: "70%", md: "70%", sm: "98%", base: "98%" }}
//         m="auto"
//       >
//         <Heading
//           fontSize="25px"
//           mt="1%"
//           textAlign="left"
//           p="2"
//           bg="teal.400"
//           color="whiteAlpha.900"
//         >
//           Order History
//         </Heading>

//         {validOrders.length === 0 ? (
//           <Text
//             textAlign="center"
//             fontSize="28px"
//             color="gray"
//             mt="2%"
//             fontWeight="bolder"
//           >
//             No Order History Found
//           </Text>
//         ) : (
//           <Stack spacing={6} mt={4}>
//             {validOrders.map((order) => {
//               const firstItem = order.cartId?.items?.[0];
//               const variant = firstItem?.variantId;
//               const product = firstItem?.productId;
//               const image =
//                 variant?.images?.[0] || "https://via.placeholder.com/150";

//               return (
//                 <Grid
//                   key={order._id}
//                   templateColumns={{ base: "1fr", md: "30% 70%" }}
//                   bg={bg}
//                   border="1px solid"
//                   borderColor={borderColor}
//                   borderRadius="md"
//                   p={4}
//                   gap={6}
//                   boxShadow="md"
//                 >
//                   {/* Image */}
//                   <Box display="flex" alignItems="center" justifyContent="center">
//                     <Box
//                       as="a"
//                       href={`/orders/${order._id}`}
//                       cursor="pointer"
//                       title="Show product details"
//                       _hover={{ transform: "scale(1.03)" }}
//                       transition="transform 0.2s"
//                     >
//                       <Image
//                         src={image}
//                         alt={product?.name || "Product"}
//                         borderRadius="md"
//                         maxW="150px"
//                         objectFit="cover"
//                       />
//                     </Box>
//                   </Box>

//                   {/* Order Details */}
//                   <Box color={textColor}>
//                     <Text fontWeight="bold" fontSize="lg" mb={2}>
//                       {product?.name || "Unnamed Product"}
//                     </Text>

//                     <Text fontSize="sm">
//                       <strong>Order ID:</strong> {order._id}
//                     </Text>
//                     <Text fontSize="sm">
//                       <strong>Status:</strong>{" "}
//                       <Text as="span" color={highlightColor}>
//                         {order.orderStatus}
//                       </Text>
//                     </Text>
//                     <Text fontSize="sm">
//                       <strong>Placed At:</strong>{" "}
//                       {new Date(order.placedAt).toLocaleDateString()}
//                     </Text>
//                     {order.orderStatus === "Pending" && (
//                       <Button
//                         colorScheme="teal"
//                         size="sm"
//                         mt={2}
//                         onClick={() => navigate(`/payment/${order._id}`)}
//                       >
//                         Complete Payment
//                       </Button>
//                     )}

//                     <Divider my={2} borderColor={borderColor} />

//                     <Text fontSize="sm">
//                       <strong>Shipping To:</strong>
//                       <br />
//                       {order.name}, {order.address}, {order.city}, {order.state},{" "}
//                       {order.country} - {order.pincode}
//                     </Text>

//                     <Text fontSize="sm">
//                       <strong>Phone:</strong> {order.phone}
//                     </Text>
//                     {/* Need a button to edit shipping details, I want to open a form on the screen itself like a popup and fill the details, call the API and update the address */}
//                     <Button
//                       colorScheme="blue"
//                       size="sm"
//                       mt={2}
//                       onClick={() => {
//                         // Open a form to edit shipping details
//                       }}
//                     >
//                       Edit Shipping Details
//                     </Button>

//                     <Divider my={2} borderColor={borderColor} />

//                     <Flex align="center">
//                       <Text fontWeight="bold" fontSize="md">
//                         Total Amount: &nbsp;
//                       </Text>
//                       <Text fontWeight="bold" fontSize="lg" color={highlightColor}>
//                         ₹{Number(order.totalAmount).toFixed(2)}
//                       </Text>
//                     </Flex>
//                   </Box>
//                 </Grid>
//               );
//             })}
//           </Stack>
//         )}
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default OrderHistory;


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
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

const OrderHistory = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [userData, setUserData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("whiteAlpha.900", "gray.800");
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

  const openEditModal = (order) => {
    setSelectedOrder(order);
    setUserData({
      first_name: order.name,
      address: order.address,
      city: order.city,
      state: order.state,
      country: order.country,
      pincode: order.pincode,
      phone: order.phone,
    });
    onOpen();
  };

  const handleUpdateShipping = async () => {
    try {
      let HOST = process.env.REACT_APP_HOST;
      const res = await axios.post(`${HOST}/api/orders/`, { userData }, { withCredentials: true })

      if (!res.data.success) {
        throw new Error(res.data.message || "Failed to update shipping");
      }

      const updatedOrders = orders.map((o) =>
        o._id === selectedOrder._id ? { ...o, ...userData } : o
      );

      setOrders(updatedOrders);
      onClose();
      toast({
        title: "Shipping details updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Error updating shipping.",
        description: err.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const validOrders = orders.filter((order) => {
    if (order.orderStatus === "Pending") {
      return order.cartId?.items?.length > 0;
    }
    return true;
  });

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

        {validOrders.length === 0 ? (
          <Text
            textAlign="center"
            fontSize="28px"
            color="gray"
            mt="2%"
            fontWeight="bolder"
          >
            No Order History Found
          </Text>
        ) : (
          <Stack spacing={6} mt={4}>
            {validOrders.map((order) => {
              const firstItem = order.cartId?.items?.[0];
              const variant = firstItem?.variantId;
              const product = firstItem?.productId;
              const image =
                variant?.images?.[0] || "https://via.placeholder.com/150";

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
                    {order.orderStatus === "Pending" && (
                      <Button
                        colorScheme="teal"
                        size="sm"
                        mt={2}
                        onClick={() => navigate(`/payment/${order._id}`)}
                      >
                        Complete Payment
                      </Button>
                    )}

                    <Divider my={2} borderColor={borderColor} />

                    <Text fontSize="sm">
                      <strong>Shipping To:</strong>
                      <br />
                      {order.name}, {order.address}, {order.city}, {order.state},{" "}
                      {order.country} - {order.pincode}
                    </Text>

                    <Flex align="center" mt={2}>
                      <Text fontSize="sm" mr={2}>
                        <strong>Phone:</strong> {order.phone}
                      </Text>
                      <IconButton
                        icon={<EditIcon />}
                        size="sm"
                        variant="ghost"
                        colorScheme="blue"
                        onClick={() => openEditModal(order)}
                        aria-label="Edit Shipping"
                      />
                    </Flex>

                    <Divider my={2} borderColor={borderColor} />

                    <Flex align="center">
                      <Text fontWeight="bold" fontSize="md">
                        Total Amount: &nbsp;
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

      {/* Modal for Editing Shipping Details */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Shipping Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {["first_name", "address", "city", "state", "country", "pincode", "phone"].map((field) => (
              <FormControl key={field} mb={3}>
                <FormLabel textTransform="capitalize">{field}</FormLabel>
                <Input
                  value={userData[field] || ""}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      [field]: e.target.value,
                    }))
                  }
                />
              </FormControl>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleUpdateShipping}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default OrderHistory;

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  removeFromCart,
  decrement,
  increment
} from "../../redux/CartPage/action";
import {
  Flex,
  Heading,
  Button,
  Image,
  Text,
  Box,
  Grid,
  // useColorModeValue
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CartItem = () => {

  const detailedItems = useSelector((state) => state.CartReducer.cart);
  console.log(detailedItems)

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleDelete = (productId, variantId) => {
    dispatch(removeFromCart(productId, variantId));
  };

  const handleDecrementChange = (productId, variantId) => {
    dispatch(decrement(productId, variantId));
  };

  const handleIncrementChange = (productId, variantId) => {
    dispatch(increment(productId, variantId));
  };

  return (
    <Box>
      {detailedItems &&
        detailedItems.map((item) => (
          <Grid
            templateColumns={{
              lg: "20% 80%",
              md: "25% 75%",
              base: "repeat(1, 1fr)",
            }}
            gap={6}
            border="1px solid #e2e8f0"
            borderRadius="12px"
            boxShadow="md"
            p={5}
            w="100%"
            mb={6}
            alignItems="center"
            key={`${item.productId}-${item.variantId}`}
          >
            {/* Product Image */}
            <Image
              src={item.image}
              alt={item.name}
              objectFit="contain"
              onClick={() => Navigate(`/products/${item.productId}`)}
              cursor="pointer"
              borderRadius="lg"
              boxSize={{
                base: "200px",
                sm: "150px",
                md: "100%",
              }}
              mx="auto"
            />

            {/* Product Info & Actions */}
            <Flex direction="column" justify="space-between" gap={4} w="100%">
              <Flex justify="space-between" align="center" paddingRight={4}>
                <Heading fontSize="20px" fontWeight="600" textTransform="capitalize">
                  {item.name}
                </Heading>
                <Text fontSize="18px" color="gray.400" fontWeight="500">
                  NPR {item.price}
                </Text>
              </Flex>

              <Text color="gray.500" fontSize="15px">
                {item.description}
              </Text>

              <Grid templateColumns="repeat(2, 1fr)" gap={2} fontSize="14px" color="gray.300">
                <Text><b>Style:</b> {item.frameStyle}</Text>
                <Text><b>Color:</b> {item.frameColor}</Text>
                <Text><b>Type:</b> {item.frameType}</Text>
                <Text><b>Lens:</b> {item.lens}</Text>
                <Text><b>Material:</b> {item.material}</Text>
                <Text as="span" color="orange.400" style={{ fontWeight: "bold" }}>Earn {item.price} PeekCoins</Text>
              </Grid>

              <Flex justify="space-between" align="center" paddingRight={4}>
                <Flex align="center" gap={4}>
                  <Text fontSize={{ base: "13px", md: "14px" }} fontWeight="500">
                    Qty:
                  </Text>
                  <Flex align="center" border="1px" borderColor="gray.300" borderRadius="md">
                    <Button
                      size={{ base: "xs", md: "sm" }}
                      px={{ base: 2, md: 3 }}
                      fontSize={{ base: "13px", md: "14px" }}
                      onClick={() => handleDecrementChange(item.productId, item.variantId)}
                    >
                      −
                    </Button>
                    <Box px={{ base: 2, md: 3 }} fontSize={{ base: "13px", md: "14px" }}>{item.quantity}</Box>
                    <Button
                      size={{ base: "xs", md: "sm" }}
                      px={{ base: 2, md: 3 }}
                      fontSize={{ base: "13px", md: "14px" }}
                      onClick={() => handleIncrementChange(item.productId, item.variantId)}
                    >
                      +
                    </Button>
                  </Flex>
                </Flex>

                <Text fontSize={{ base: "13px", md: "14px" }} fontWeight="600" color="teal.600">
                  Subtotal: NPR {item.price * item.quantity}
                </Text>
              </Flex>

              <Button
                variant="link"
                color="red.500"
                fontWeight="500"
                onClick={() => handleDelete(item.productId, item.variantId)}
                alignSelf="flex-end"
                paddingRight={4}
                textDecoration="underline"
              >
                Remove
              </Button>
            </Flex>
          </Grid>

        ))}
    </Box>
  );
};

export default CartItem;

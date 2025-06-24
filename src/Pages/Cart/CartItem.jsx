import React from "react";
import { useDispatch } from "react-redux";
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
  Grid
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CartItem = ({ detailedItems }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecrementChange = (id, qty) => {
    if (qty < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decrement(id));
    }
  };

  const handleIncrementChange = (id) => {
    dispatch(increment(id));
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
                <Text fontSize="18px" color="gray.600" fontWeight="500">
                  NPR {item.price}
                </Text>
              </Flex>

              <Text color="gray.500" fontSize="15px">
                {item.description}
              </Text>

              <Grid templateColumns="repeat(2, 1fr)" gap={2} fontSize="14px" color="gray.700">
                <Text><b>Style:</b> {item.frameStyle}</Text>
                <Text><b>Color:</b> {item.frameColor}</Text>
                <Text><b>Type:</b> {item.frameType}</Text>
                <Text><b>Lens:</b> {item.lens}</Text>
                <Text><b>Material:</b> {item.material}</Text>
              </Grid>

              <Flex justify="space-between" align="center" paddingRight={4}>
                <Flex align="center" gap={4}>
                  <Text fontSize="16px" fontWeight="500">
                    Qty:
                  </Text>
                  <Flex align="center" border="1px" borderColor="gray.300" borderRadius="md">
                    <Button
                      size="sm"
                      onClick={() => handleDecrementChange(item.productId, item.variantId, item.quantity)}
                    >
                      −
                    </Button>
                    <Box px={3}>{item.quantity}</Box>
                    <Button
                      size="sm"
                      onClick={() => handleIncrementChange(item.productId, item.variantId)}
                    >
                      +
                    </Button>
                  </Flex>
                </Flex>

                <Text fontSize="16px" fontWeight="600" color="teal.600">
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

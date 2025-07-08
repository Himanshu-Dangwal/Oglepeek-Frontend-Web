import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Divider,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function CartItem() {
  const { cart, coupon } = useSelector((state) => state.CartReducer);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Color mode aware styles
  const headerBg = useColorModeValue("gray.100", "gray.700");
  const boxBorder = useColorModeValue("gray.300", "gray.600");
  const subtotalBg = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const mutedText = useColorModeValue("gray.500", "gray.400");
  const highlightColor = useColorModeValue("teal.600", "teal.300");
  const totalColor = useColorModeValue("blue.700", "blue.300");

  return (
    <>
      <Flex flexDirection="column" mt="10px">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          bg={headerBg}
          color={textColor}
          p={2}
        >
          <Text ml="5px" fontSize="md" fontWeight="bold">
            SHOPPING CART:
          </Text>
          <Text mr="5px" fontSize="md" fontWeight="bold">
            Item {cart.length}
          </Text>
        </Box>

        <Box border={`1px solid ${boxBorder}`}>
          {cart.map((item, index) => (
            <Box key={index}>
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "30% 60%",
                }}
                justifyContent="center"
                gap={5}
                alignItems="center"
                m="auto"
                mb="20px"
                p={3}
                fontSize="md"
              >
                <Box>
                  <Image
                    h={{ base: "70px", md: "60px" }}
                    w={{ base: "60%", sm: "40%", md: "90%", lg: "60%" }}
                    src={item.image}
                    m="auto"
                    borderRadius="md"
                  />
                </Box>

                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "1fr 1fr",
                  }}
                  gap={4}
                >
                  <Box>
                    <Text textAlign="left" color={textColor}>
                      Qty: {item.quantity}
                    </Text>
                  </Box>

                  <Box>
                    <Flex
                      gap={6}
                      flexDirection={{ base: "column", lg: "row" }}
                    >
                      <Box textAlign="left">
                        <Text color={mutedText} fontWeight="500" fontSize="16px">
                          <s>₹{item.price}</s>
                        </Text>
                        <Text color={highlightColor} fontWeight="600" fontSize="14px">
                          Total:
                        </Text>
                      </Box>
                      <Box textAlign="left">
                        <Text fontWeight="700" color={textColor}>
                          ₹{item.price}
                        </Text>
                        <Text color={highlightColor} fontWeight="600" fontSize="14px">
                          ₹{item.price * item.quantity}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Grid>
              </Grid>

              <Divider borderColor={boxBorder} mb={2} />
            </Box>
          ))}
        </Box>

        <Box p={5} border={`1px solid ${boxBorder}`} bg={subtotalBg}>
          <Flex justifyContent="space-between" fontSize="16px" color={textColor}>
            <Text fontWeight="bold">SUBTOTAL</Text>
            <Text fontWeight="medium">₹{getTotalPrice()}.00</Text>
          </Flex>

          <Divider borderColor={boxBorder} my={2} />

          <Flex justifyContent="space-between" fontSize="15px" mb={2} color={textColor}>
            <Text fontWeight="bold">TAX COLLECTED</Text>
            <Text fontWeight="medium">
              + ₹{Math.round((getTotalPrice() - (coupon || 0)) * 0.10)}.00
            </Text>
          </Flex>

          <Divider borderColor={boxBorder} mb={2} />

          <Flex justifyContent="space-between" fontSize="16px" color={textColor}>
            <Text fontWeight="bold">
              TOTAL ORDER{" "}
              <span style={{ fontSize: "14px", fontWeight: "500", color: mutedText }}>
                (After Tax)
              </span>
            </Text>
            <Text fontWeight="medium">
              ₹{Math.round(getTotalPrice() + getTotalPrice() * 0.10)}.00
            </Text>
          </Flex>

          <Divider borderColor={boxBorder} my={2} />

          <Flex justifyContent="space-between" fontSize="16px" mb={2} color={textColor}>
            <Text fontWeight="bold">COUPON</Text>
            <Text fontWeight="medium"> - ₹{coupon || 0}.00</Text>
          </Flex>

          <Divider borderColor={boxBorder} mb={2} />

          <Flex justifyContent="space-between" alignItems="center" color={textColor}>
            <Text fontWeight="bolder" fontSize="17px">
              TOTAL PAYABLE
            </Text>
            <Text fontWeight="bold" fontSize="17px" color={totalColor}>
              ₹
              {Math.round(getTotalPrice() + getTotalPrice() * 0.10) -
                (coupon || 0)}
              .00
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

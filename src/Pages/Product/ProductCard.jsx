// import { Link } from "react-router-dom";
// import {
//   Box,
//   Grid,
//   GridItem,
//   Text,
//   Image,
//   useColorModeValue,
//   Flex,
// } from "@chakra-ui/react";

// const ProductCard = ({ type }) => {
//   const nameColor = useColorModeValue("#000042", "gray.400");

//   return (
//     <Box overflowX="hidden" overflow="hidden">
//       <Grid
//         m="20px 10px"
//         templateColumns={{
//           base: "repeat(2, 1fr)",
//           sm: "repeat(2, 1fr)",
//           md: "repeat(2, 1fr)",
//           lg: "repeat(3, 1fr)"
//         }}
//         gap={6}
//         maxW="100%"
//       >
//         {type.map((ele) => (
//           <GridItem key={ele._id} overflow="hidden">
//             <Link to={`/products/${ele._id}`}>
//               <Box
//                 border="1px solid"
//                 borderColor="gray.200"
//                 borderRadius="3%"
//                 p="10px"
//                 _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
//                 mb="7"
//                 maxW="100%"
//                 overflow="hidden"
//               >
//                 <Image
//                   m="auto"
//                   width="100%"
//                   maxW="200px"
//                   src={
//                     ele.variants?.[0]?.images?.[0] ||
//                     "https://via.placeholder.com/150"
//                   }
//                   alt={ele.name}
//                 />

//                 {/* Responsive stacking */}
//                 <Flex
//                   direction={{ base: "column", md: "row" }}
//                   justify="space-around"
//                   align={{ base: "flex-start", md: "center" }}
//                   gap={2}
//                   mt={4}
//                 >
//                   {/* Product Info */}
//                   <Box>
//                     <Text
//                       fontWeight="700"
//                       color={nameColor}
//                       fontSize="15px"
//                       isTruncated
//                     >
//                       {ele.name}
//                     </Text>

//                     <Text
//                       mt="5px"
//                       fontWeight="400"
//                       color="gray.400"
//                       fontSize="14px"
//                     >
//                       Style: {ele.frameStyle}
//                     </Text>

//                     <Text
//                       mt="5px"
//                       fontWeight="bold"
//                       color="gray.700"
//                       fontSize="15px"
//                     >
//                       ₹{ele.variants?.[0]?.price}
//                     </Text>
//                   </Box>

//                   {/* Offer Box */}
//                   <Box
//                     fontSize="14px"
//                     color="#cbb881"
//                     fontWeight="bold"
//                     bgGradient="linear(to-r, #f8f2e0, yellow.50)"
//                     p="2"
//                     borderRadius="md"
//                     textAlign={{ base: "left", md: "left", xl: "left", l: "left" }}
//                     // whiteSpace="nowrap"
//                     maxW={{ base: "100%", md: "40%", l: "100%", xl: "100%" }}
//                     w={{ base: "100%", md: "auto", l: "100%", xl: "100%" }}
//                   >
//                     BUY10 GET1 Free
//                     <br />
//                     <Text as="span" color="orange.400" fontSize="13px">
//                       Earn ₹{ele.variants?.[0]?.price} PeekCoins
//                     </Text>
//                   </Box>
//                 </Flex>
//               </Box>
//             </Link>
//           </GridItem>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProductCard;


import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

const ProductCard = ({ type }) => {
  const nameColor = useColorModeValue("#000042", "gray.400");
  const imageBg = useColorModeValue("gray.50", "gray.800"); // background for image container

  return (
    <Box overflowX="hidden">
      <Grid
        m="20px 10px"
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        maxW="100%"
      >
        {type.map((ele) => (
          <GridItem key={ele._id}>
            <Link to={`/products/${ele._id}`}>
              <Box
                border="1px solid"
                borderColor="gray.200"
                borderRadius="3%"
                p="10px"
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                mb="7"
                maxW="100%"
              >
                {/* Image with theme-aware background */}
                <Box
                  bg={imageBg}
                  p="10px"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                >
                  <Image
                    width="100%"
                    maxW="200px"
                    src={
                      ele.variants?.[0]?.images?.[0] ||
                      "https://via.placeholder.com/150"
                    }
                    alt={ele.name}
                    borderRadius="md"
                  />
                </Box>

                {/* Responsive stacking */}
                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                  align={{ base: "flex-start", md: "center" }}
                  gap={2}
                  mt={4}
                >
                  {/* Product Info */}
                  <Box>
                    <Text
                      fontWeight="700"
                      color={nameColor}
                      fontSize="15px"
                      isTruncated
                    >
                      {ele.name}
                    </Text>

                    <Text
                      mt="5px"
                      fontWeight="400"
                      color="gray.400"
                      fontSize="14px"
                    >
                      Style: {ele.frameStyle}
                    </Text>

                    <Text
                      mt="5px"
                      fontWeight="bold"
                      color="gray.700"
                      fontSize="15px"
                    >
                      ₹{ele.variants?.[0]?.price}
                    </Text>
                  </Box>

                  {/* Offer Box */}
                  <Box
                    fontSize="14px"
                    color="#cbb881"
                    fontWeight="bold"
                    bgGradient="linear(to-r, #f8f2e0, yellow.50)"
                    p="2"
                    borderRadius="md"
                    textAlign={{ base: "left", md: "right" }}
                    maxW={{ base: "100%", md: "40%" }}
                    w={{ base: "100%", md: "auto" }}
                  >
                    BUY10 GET1 Free
                    <br />
                    <Text as="span" color="orange.400" fontSize="13px">
                      Earn ₹{ele.variants?.[0]?.price} PeekCoins
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;

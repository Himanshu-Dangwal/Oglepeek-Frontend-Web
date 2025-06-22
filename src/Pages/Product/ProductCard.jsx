import { Link } from "react-router-dom";
import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";

const ProductCard = ({ type }) => {

  return (
    <Grid
      m="20px 10px"
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)"
      }}
      gap={6}
    >
      {type.map((ele) => (
        <GridItem key={ele._id}>
          <Link to={`/products/${ele._id}`}>
            <Box
              position="relative"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="3%"
              p="10px"
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              mb="7"
            >
              <Image
                m="auto"
                width="80%"
                src={ele.variants?.[0]?.images?.[0] || "https://via.placeholder.com/150"}
                alt={ele.name}
              />
              <Box p="10px">
                <Text mt="5px" fontWeight="700" color="#000042" fontSize="15px">
                  {ele.name}
                </Text>
                <Text mt="5px" fontWeight="400" color="gray.400" fontSize="14px">
                  Style: {ele.frameStyle}
                </Text>
                <Text mt="5px" fontWeight="bold" color="#gray.700" fontSize="15px">
                  ₹{ele.variants?.[0]?.price}
                </Text>
              </Box>
              <Box
                fontSize="15px"
                color="#cbb881"
                w="100%"
                padding="2"
                fontWeight="bold"
                bgGradient="linear(to-r,  #f8f2e0, yellow.50)"
              >
                BUY10 GET1 Free
                <br />
                <Text as="span" color="orange.400">
                  Earn{" "}
                  {Math.floor(
                    (ele.variants?.[0]?.price || 0) > 0.1 * (ele.variants?.[0]?.price || 0)
                      ? 0.1 * (ele.variants?.[0]?.price || 0)
                      : ele.variants?.[0]?.price || 0
                  )}{" "}
                  Peek Coins
                </Text>
              </Box>
            </Box>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductCard;

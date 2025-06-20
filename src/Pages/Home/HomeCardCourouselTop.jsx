import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HomeCardCourouselTop = ({ type }) => {
  // Group images into pairs
  const imagePairs = [];
  for (let i = 0; i < type.length; i += 2) {
    imagePairs.push(type.slice(i, i + 2));
  }

  return (
    <Box cursor="pointer">
      <Slide>
        {imagePairs.map((pair, index) => (
          <Flex key={index} justify="center" gap={4}>
            {pair.map((i, idx) => (
              <Box key={idx} height="550px" overflow="hidden" flex="1">
                <Image
                  src={i.img}
                  alt={i.caption}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Box>
            ))}
          </Flex>
        ))}
      </Slide>
    </Box>
  );
};

export default HomeCardCourouselTop;

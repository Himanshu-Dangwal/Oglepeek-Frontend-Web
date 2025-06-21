import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Slider from "./Slider";

const HomeCardGlassesStyle = ({ type, src }) => {
  return (
    <Box justifyContent="left" w="auto" m="auto" mt="0" cursor="pointer" mb="0">
      <Flex>
        <Box
          boxSize="200px"
          w={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "50%",
            base: "none"
          }}
          cursor="pointer"
          pr={{ lg: "0", sm: "0", base: "0" }}
        >
          <Image
            src={src}
            w="100%"
            h="auto"
            objectFit="contain" // or try "cover" if you prefer
            borderRadius="md"
          />
        </Box>
        <Spacer />
        <Box
          w={{ sm: "67%", md: "100%", lg: "100%", xl: "80%", base: "50%" }}
        >
          <Slider type={type} />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeCardGlassesStyle;




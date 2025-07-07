// import React from "react";
// import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
// import Slider from "./Slider";

// const HomeCardGlassesStyle = ({ type, src }) => {
//   return (
//     <Box justifyContent="left" w="auto" m="auto" mt="0" cursor="pointer" mb="0">
//       <Flex>
//         <Box
//           boxSize="200px"
//           w={{
//             xs: "none",
//             sm: "none",
//             md: "none",
//             lg: "none",
//             xl: "50%",
//             base: "none"
//           }}
//           cursor="pointer"
//           pr={{ lg: "0", sm: "0", base: "0" }}
//         >
//           <Image
//             src={src}
//             w="100%"
//             h="auto"
//             objectFit="contain"
//             borderRadius="md"
//           />
//         </Box>
//         <Spacer />
//         <Box
//           w={{ sm: "67%", md: "100%", lg: "100%", xl: "80%", base: "50%" }}
//         >
//           <Slider type={type} />
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default HomeCardGlassesStyle;



import React from "react";
import { Box, Flex, Image, Spacer, useColorModeValue } from "@chakra-ui/react";
import Slider from "./Slider";

const HomeCardGlassesStyle = ({ type, src }) => {
  const bg = useColorModeValue("#f9f9f9", "gray.800");
  const boxBg = useColorModeValue("white", "gray.700");

  return (
    <Box
      bg={bg}
      justifyContent="left"
      w="auto"
      m="auto"
      py="4"
      px={{ base: 2, md: 6 }}
      cursor="pointer"
    >
      <Flex
        direction={{ base: "column", xl: "row" }}
        align="center"
        gap={4}
        bg={boxBg}
        borderRadius="md"
        p="4"
        boxShadow="md"
      >
        {/* Logo/Image Box */}
        <Box
          w={{ base: "100%", xl: "40%" }}
          display={{ base: "none", xl: "block" }}
        >
          <Image
            src={src}
            w="100%"
            h="auto"
            objectFit="contain"
            borderRadius="md"
          />
        </Box>

        <Spacer display={{ base: "none", xl: "block" }} />

        {/* Slider Box */}
        <Box w={{ base: "100%", xl: "60%" }}>
          <Slider type={type} />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeCardGlassesStyle;

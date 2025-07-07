// import React from "react";
// import { Box, Image, Flex } from "@chakra-ui/react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

// const HomeCardCourouselTop = ({ type }) => {
//   // Group images into pairs
//   const imagePairs = [];
//   for (let i = 0; i < type.length; i += 2) {
//     imagePairs.push(type.slice(i, i + 2));
//   }

//   return (
//     <Box cursor="pointer">
//       <Slide>
//         {imagePairs.map((pair, index) => (
//           <Flex key={index} justify="center" gap={4}>
//             {pair.map((i, idx) => (
//               <Box key={idx} height="550px" overflow="hidden" flex="1">
//                 <Image
//                   src={i.img}
//                   alt={i.caption}
//                   width="100%"
//                   height="100%"
//                   objectFit="cover"
//                 />
//               </Box>
//             ))}
//           </Flex>
//         ))}
//       </Slide>
//     </Box>
//   );
// };

// export default HomeCardCourouselTop;


import React from "react";
import { Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HomeCardCourouselTop = ({ type }) => {
  // Group images into pairs
  const imagePairs = [];
  for (let i = 0; i < type.length; i += 2) {
    imagePairs.push(type.slice(i, i + 2));
  }

  const bg = useColorModeValue("#f9f9f9", "gray.700");

  return (
    <Box cursor="pointer" bg={bg} py={4}>
      <Slide autoplay={true} duration={4000} transitionDuration={600} easing="ease">
        {imagePairs.map((pair, index) => (
          <Flex
            key={index}
            justify="center"
            align="center"
            gap={4}
            px={[2, 6]}
            flexWrap="wrap"
          >
            {pair.map((i, idx) => (
              <Box
                key={idx}
                height={["250px", "350px", "500px"]}
                overflow="hidden"
                flex="1"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image
                  src={i.img}
                  alt={i.caption || `Slide ${index}-${idx}`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  transition="transform 0.3s"
                  _hover={{ transform: "scale(1.02)" }}
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

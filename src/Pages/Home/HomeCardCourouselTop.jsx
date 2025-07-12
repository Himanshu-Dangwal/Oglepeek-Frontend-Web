// import React from "react";
// import { Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import { useNavigate } from "react-router-dom";

// const HomeCardCourouselTop = ({ type }) => {

//   const navigate = useNavigate();
//   // Group images into pairs
//   const imagePairs = [];
//   for (let i = 0; i < type.length; i += 2) {
//     imagePairs.push(type.slice(i, i + 2));
//   }

//   const bg = useColorModeValue("#f9f9f9", "gray.700");

//   return (
//     <Box cursor="pointer" bg={bg} py={4}>
//       <Slide autoplay={true} duration={4000} transitionDuration={600} easing="ease">
//         {imagePairs.map((pair, index) => (
//           <Flex
//             key={index}
//             justify="center"
//             align="center"
//             gap={4}
//             px={[2, 6]}
//             flexWrap="wrap"
//           >
//             {pair.map((i, idx) => (
//               <Box
//                 key={idx}
//                 height={["250px", "350px", "500px"]}
//                 overflow="hidden"
//                 flex="1"
//                 borderRadius="lg"
//                 boxShadow="md"
//                 onClick={() => navigate('/products')}
//                 _hover={{ boxShadow: "xl", cursor: "pointer" }}
//               >
//                 <Image
//                   src={i.img}
//                   alt={i.caption || `Slide ${index}-${idx}`}
//                   width="100%"
//                   height="100%"
//                   objectFit="cover"
//                   transition="transform 0.3s"
//                   _hover={{ transform: "scale(1.02)" }}
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
import { Box, Image, Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "react-slideshow-image/dist/styles.css";

const HomeCardCourouselTop = ({ type }) => {
  const navigate = useNavigate();
  const bg = useColorModeValue("#f9f9f9", "gray.700");

  const imagePairs = [];
  for (let i = 0; i < type.length; i += 2) {
    imagePairs.push(type.slice(i, i + 2));
  }

  const CustomArrow = ({ direction, onClick }) => (
    <IconButton
      icon={direction === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      onClick={onClick}
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      zIndex="2"
      size="sm"
      colorScheme="teal"
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
      left={direction === "left" ? "10px" : undefined}
      right={direction === "right" ? "10px" : undefined}
      variant="solid"
      bg="teal.800"
      _hover={{ bg: "teal.600" }}
    />
  );

  return (
    <Box bg={bg} py={4} position="relative">
      <Slide
        autoplay
        duration={4000}
        transitionDuration={600}
        easing="ease"
        prevArrow={<CustomArrow direction="left" />}
        nextArrow={<CustomArrow direction="right" />}
      >
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
                onClick={() => navigate('/products')}
                _hover={{ boxShadow: "xl", cursor: "pointer" }}
                minW="300px"
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

// import { Box, Grid, GridItem, Text, Image, useColorModeValue } from "@chakra-ui/react";

// const ProdFrame = ({ heading, type, filter }) => {
//   const color = useColorModeValue("gray.600", "gray.400");
//   const textColor = useColorModeValue("gray.500", "gray.450")
//   return (
//     <Box mb="20px">
//       <br />
//       <Text fontWeight="bold" mb="3px" color={color} fontSize="15px">
//         {heading}
//       </Text>
//       <Grid templateColumns="repeat(3, 1fr)">
//         {type.map((ele, i) => (
//           <GridItem key={i}>
//             <Box
//               onClick={() => filter(ele.name)}
//               mr="3px"
//               border="1px solid"
//               borderColor="gray.300"
//               _hover={{ border: "5px solid gray" }}
//             >
//               <Image m="7px auto" width="70px" src={ele.src} />
//               <Text
//                 mx="5px"
//                 textAlign="center"
//                 fontSize="14px"
//                 color={textColor}
//               >
//                 {ele.title}
//               </Text>
//             </Box>
//           </GridItem>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProdFrame;


import { Box, Grid, GridItem, Text, Image, useColorModeValue } from "@chakra-ui/react";

const ProdFrame = ({ heading, type, filter }) => {
  const color = useColorModeValue("gray.600", "gray.400");
  const textColor = useColorModeValue("gray.600", "gray.600");
  const imgBg = useColorModeValue("white", "white"); // dynamic background

  return (
    <Box mb="20px">
      <br />
      <Text fontWeight="bold" mb="3px" color={color} fontSize="15px">
        {heading}
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {type.map((ele, i) => (
          <GridItem key={i}>
            <Box
              onClick={() => filter(ele.name)}
              border="1px solid"
              borderColor="gray.300"
              mr="3px"
              _hover={{ border: "2px solid", borderColor: "gray.500" }}
              // borderRadius="md"
              overflow="hidden"
              bg={imgBg} // apply background
              // p={2}
              transition="all 0.2s ease"
              cursor="pointer"
            >
              <Box bg={imgBg} p={2} borderRadius="md">
                <Image m="7px auto" width="70px" src={ele.src} alt={ele.title} />
              </Box>
              <Text
                textAlign="center"
                fontSize="14px"
                color={textColor}
                mx="5px"
              >
                {ele.title}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProdFrame;

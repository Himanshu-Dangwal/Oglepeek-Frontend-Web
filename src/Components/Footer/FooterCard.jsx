import React from "react";
import { Box, Text, Image, Flex, Center, Grid } from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";

export const FooterCardColumn = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize="25px">{heading}</Text>
      <Box lineHeight="8">
        {type.map((i, index) => (
          <Box key={index}>
            <Text
              fontSize="15px"
              _hover={{ color: "black", boxShadow: "0 0 5px black" }}
              lineHeight="2"
            >
              {i.labels}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FooterCardDisplayingDownloadLink = () => {
  return (
    <Box cursor="pointer" textAlign="center" m="auto">
      <Center>
        <Grid
          gap="2"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
            "2xl": "repeat(2,1fr)"
          }}
        >
          <Image
            src="https://static.lenskart.com/media/desktop/img/play-store.svg"
            alt="img"
          />
          <Image
            src="https://static.lenskart.com/media/desktop/img/app-store.svg"
            alt="img"
          />
        </Grid>
      </Center>
      <br />
      <Center w="60%" m="auto" fontSize="14px">
        <Text>
          Coming Soon! Download the Oglepeek App for the best experience
        </Text>
      </Center>
    </Box>
  );
};

export const FooterCardLastRow = () => {
  return (
    <Box bg="#5a5c5a" color="white" boxShadow={"0 0 5px black"}>
      <Grid
        templateColumns="repeat(2,1fr)"
        justifyContent="space-between"
        m="auto"
      >
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(3,1fr)",
            "2xl": "repeat(3,1fr)"
          }}
          cursor="pointer"
          p="2%"
          pl="6%"
          w="35%"
          lineHeight="10"
          gap="10%"
          pb={{ lg: "2%", sm: "4%", base: "10%" }}
        >
          <Text fontSize="14px">T&C</Text>
          <Text fontSize="14px">Privacy</Text>
          <Text fontSize="14px">Disclaimer</Text>
        </Grid>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)"
          }}
          m="auto"
          color="white"
          gap="2"
          textAlign="left"
        >
          <Text fontSize="16px" fontWeight="500" color={"white"}>
            Follow us at
          </Text>
          <Flex gap="2">
            <AiFillFacebook size="30px" />
            <AiOutlineInstagram size="30px" />
            <TfiTwitter size="30px" />
          </Flex>
        </Grid>
      </Grid>
    </Box>
  );
};


// export const FooterCardLastRow = () => {
//   return (
//     <Box bg="black" color="white" py="4">
//       <Grid
//         templateColumns="repeat(2, 1fr)"
//         justifyContent="space-between"
//         alignItems="center"
//         m="auto"
//         px="6%"
//       >
//         {/* Left side: Links */}
//         <Grid
//           templateColumns={{
//             base: "repeat(1,1fr)",
//             md: "repeat(3,1fr)",
//           }}
//           cursor="pointer"
//           lineHeight="2"
//           gap="6"
//         >
//           <Text fontSize="14px">T&C</Text>
//           <Text fontSize="14px">Privacy</Text>
//           <Text fontSize="14px">Disclaimer</Text>
//         </Grid>

//         {/* Right side: Social Icons */}
//         <Flex direction="column" align={{ base: "flex-start", md: "flex-end" }}>
//           <Text fontSize="16px" fontWeight="500" mb="2">
//             Follow us at
//           </Text>
//           <Flex gap="3">
//             <AiFillFacebook size="24px" />
//             <AiOutlineInstagram size="24px" />
//             <TfiTwitter size="24px" />
//           </Flex>
//         </Flex>
//       </Grid>
//     </Box>
//   );
// };

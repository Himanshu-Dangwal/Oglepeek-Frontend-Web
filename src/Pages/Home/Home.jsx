// import React from "react";
// import { useColorModeValue, Box, Flex, Image } from "@chakra-ui/react";
// import HomeCard from "./HomeCard";
// import HomeCardCourouselTop from "./HomeCardCourouselTop";
// import HomeCardGlassesStyle from "./HomeCardGlassesStyle";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";

// import backgroundVideo4 from "./videos/backgroundVideo4.webm";
// import backgroundVideo5 from "./videos/backgroundVideo5.webm";
// import backgroundVideo2 from "./videos/backgroundVideo2.webm";
// import backgroundVideo3 from "./videos/backgroundVideo3.webm";
// import OglepeekLogo from "../../Components/Navbar/Oglepeek.png";

// import {
//   HomeDetailsLayer1Images,
//   HomeDetailsCourouselTop,
//   DetailsSunglassesStyles,
// } from "./HomeDetails";

// const Home = () => {
//   const bg = useColorModeValue("gray.50", "gray.800");


//   const renderVideo = (src) => (
//     <Box
//       minW={["80%", "60%", "48%"]}
//       bg={bg}
//       borderRadius="lg"
//       overflow="hidden"
//       flexShrink={0}
//     >
//       <video
//         loading="lazy"
//         src={src}
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           width: "100%",
//           objectFit: "cover",
//           height: "400px",
//         }}
//       />
//     </Box>
//   );

//   return (
//     <Box bg={bg} minH="100vh">
//       <Navbar />

//       <HomeCard type={HomeDetailsLayer1Images} />
//       <HomeCardCourouselTop type={HomeDetailsCourouselTop} />

//       <Box py={12}>
//         <Flex
//           justify="center"
//           gap={6}
//           flexWrap={["nowrap", "nowrap", "wrap"]}
//           overflowX={["auto", "auto", "unset"]}
//           px={[2, 4]}
//         >
//           {renderVideo(backgroundVideo2)}
//           {renderVideo(backgroundVideo4)}
//         </Flex>
//       </Box>

//       <HomeCardGlassesStyle type={DetailsSunglassesStyles} src={OglepeekLogo} />

//       <Box py={12}>
//         <Flex
//           justify="center"
//           gap={6}
//           flexWrap={["nowrap", "nowrap", "wrap"]}
//           overflowX={["auto", "auto", "unset"]}
//           px={[2, 4]}
//         >
//           {renderVideo(backgroundVideo3)}
//           {renderVideo(backgroundVideo5)}
//         </Flex>
//       </Box>

//       <Image
//         src="https://qtoptometry.com/wp-content/uploads/2014/03/QT-Optometry-Reading-Glasses.gif"
//         alt="gif"
//         mt={10}
//         width="100%"
//         objectFit="cover"
//       />

//       <Footer />
//     </Box>
//   );
// };

// export default Home;


import React, { useState, useRef } from "react";
import {
  useColorModeValue,
  Box,
  Flex,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import HomeCard from "./HomeCard";
import HomeCardCourouselTop from "./HomeCardCourouselTop";
import HomeCardGlassesStyle from "./HomeCardGlassesStyle";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import backgroundVideo4 from "./videos/backgroundVideo4.webm";
import backgroundVideo5 from "./videos/backgroundVideo5.webm";
import backgroundVideo2 from "./videos/backgroundVideo2.webm";
import backgroundVideo3 from "./videos/backgroundVideo3.webm";
import OglepeekLogo from "../../Components/Navbar/Oglepeek.png";

import {
  HomeDetailsLayer1Images,
  HomeDetailsCourouselTop,
  DetailsSunglassesStyles,
} from "./HomeDetails";

const Home = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  const [isMuted, setIsMuted] = useState(false);
  const video5Ref = useRef(null);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMuted = !prev;
      if (video5Ref.current) {
        video5Ref.current.muted = newMuted;
      }
      return newMuted;
    });
  };

  const renderVideo = (src, ref = null, showMuteButton = false) => (
    <Box
      minW={{ base: "100%", md: "48%" }}
      bg={bg}
      borderRadius="lg"
      overflow="hidden"
      flexShrink={0}
      position="relative"
    >
      <video
        ref={ref}
        loading="lazy"
        src={src}
        autoPlay
        loop
        muted={!showMuteButton}
        playsInline
        style={{
          width: "100%",
          objectFit: "cover",
          height: "400px",
        }}
      />

      {showMuteButton && (
        <IconButton
          icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          onClick={toggleMute}
          position="absolute"
          bottom="10px"
          right="10px"
          colorScheme="teal"
          borderRadius="full"
          size="sm"
          zIndex={1}
          aria-label="toggle sound"
        />
      )}
    </Box>
  );

  return (
    <Box bg={bg} minH="100vh">
      <Navbar />

      <HomeCard type={HomeDetailsLayer1Images} />
      <HomeCardCourouselTop type={HomeDetailsCourouselTop} />

      {/* Top video section */}
      <Box py={12}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          gap={6}
          px={[2, 4]}
        >
          {renderVideo(backgroundVideo2)}
          {renderVideo(backgroundVideo4)}
        </Flex>
      </Box>

      <HomeCardGlassesStyle type={DetailsSunglassesStyles} src={OglepeekLogo} />

      {/* Bottom video section with mute button on video 5 */}
      <Box py={12}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          gap={6}
          px={[2, 4]}
        >
          {renderVideo(backgroundVideo3)}
          {renderVideo(backgroundVideo5, video5Ref, true)}
        </Flex>
      </Box>

      <Image
        src="https://qtoptometry.com/wp-content/uploads/2014/03/QT-Optometry-Reading-Glasses.gif"
        alt="gif"
        mt={10}
        width="100%"
        objectFit="cover"
      />

      <Footer />
    </Box>
  );
};

export default Home;
//Dummy
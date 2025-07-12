import React from "react";
import {
  useColorModeValue,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
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

  const renderVideo = (src) => (
    <Box
      minW={{ base: "100%", md: "48%" }}
      bg={bg}
      borderRadius="lg"
      overflow="hidden"
      flexShrink={0}
      position="relative"
    >
      <video
        loading="lazy"
        src={src}
        type="video/webm"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          objectFit: "cover",
          height: "400px",
        }}
      />
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

      {/* Bottom video section */}
      <Box py={12}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          gap={6}
          px={[2, 4]}
        >
          {renderVideo(backgroundVideo3)}
          {renderVideo(backgroundVideo5)}
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
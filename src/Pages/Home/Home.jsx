import React from "react";
import HomeCard from "./HomeCard";
import HomeCardCourouselTop from "./HomeCardCourouselTop";
import HomeCardGlassesStyle from "./HomeCardGlassesStyle";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import backgroundVideo4 from "./videos/backgroundVideo4.webm";
import backgroundVideo5 from "./videos/backgroundVideo5.webm";
import backgroundVideo2 from "./videos/backgroundVideo2.webm";
import backgroundVideo3 from "./videos/backgroundVideo3.webm";
import OglepeekLogo from "../../Components/Navbar/Oglepeek.jpeg";


import {
  HomeDetailsLayer1Images,
  HomeDetailsCourouselTop,
  DetailsSunglassesStyles,
} from "./HomeDetails";
import { Image, Box, Flex } from "@chakra-ui/react";
const Home = () => {
  return (
    <Box>
      <Navbar />
      <HomeCard type={HomeDetailsLayer1Images} />
      <HomeCardCourouselTop type={HomeDetailsCourouselTop} />
      <br /><br /><br /><br /><br /><br />
      <Flex justify="center" gap={4} flexWrap="wrap">
        <Box w={["100%", "48%"]}>
          <video
            loading="lazy"
            src={backgroundVideo2}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              height: "400px"
            }}
          />
        </Box>
        <Box w={["100%", "48%"]}>
          <video
            loading="lazy"
            src={backgroundVideo4}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              height: "400px"
            }}
          />
        </Box>
      </Flex>
      <br /><br /><br /><br />
      <HomeCardGlassesStyle type={DetailsSunglassesStyles} src={OglepeekLogo} />
      <br /><br /><br /><br />
      <Flex justify="center" gap={4} flexWrap="wrap">
        <Box w={["100%", "48%"]}>
          <video
            loading="lazy"
            src={backgroundVideo3}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              height: "400px"
            }}
          />
        </Box>
        <Box w={["100%", "48%"]}>
          <video
            loading="lazy"
            src={backgroundVideo5}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              height: "400px"
            }}
          />
        </Box>
      </Flex>
      <Image
        src="https://qtoptometry.com/wp-content/uploads/2014/03/QT-Optometry-Reading-Glasses.gif"
        alt="img"
        mt="10"
        width="100%"
        height="cover"
      />

      <Footer />
    </Box>
  );
};

export default Home;

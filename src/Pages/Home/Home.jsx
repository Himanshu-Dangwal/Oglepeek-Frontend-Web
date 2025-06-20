import React from "react";
import HomeCard from "./HomeCard";
import HomeCardCourousel1 from "./HomeCardCourouselTop";
import HomeCardGlassesStyle from "./HomeCardGlassesStyle";
import { HomeCard4 } from "./HomeCard4";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import backgroundVideo from "./backgroundVideo.mp4";
import backgroundVideo2 from "./backgroundVideo2.mp4";
import backgroundVideo3 from "./backgroundVideo3.mp4";


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
      <HomeCardCourousel1 type={HomeDetailsCourouselTop} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Flex justify="center" gap={4} flexWrap="wrap">
        <Box w={["100%", "48%"]}>
          <video
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
      </Flex>

      <br />
      <br />
      <br />
      <br />
      <HomeCardGlassesStyle type={DetailsSunglassesStyles} src="https://i.imgur.com/Gry0Q5D.png" />
      <br />
      <br />
      <br />
      <br />
      {/* <HomeCard4
        text="Trending Sunglasses"
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      /> */}
      <Flex justify="center" gap={4} flexWrap="wrap">
        <Box w={["100%", "48%"]}>
          <video
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
      </Flex>
      <Image
        src="https://qtoptometry.com/wp-content/uploads/2014/03/QT-Optometry-Reading-Glasses.gif"
        alt="img"
        mt="10"
        width="100%"
        height="cover"
      />

      {/* <HomeCard4
        text="Discover your signature style with us!"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
      /> */}




      <Footer />
    </Box>
  );
};

export default Home;

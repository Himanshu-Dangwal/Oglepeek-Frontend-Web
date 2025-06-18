import React from "react";
import HomeCard from "./HomeCard";
import HomeCardCourousel1 from "./HomeCardCourouselTop";
import HomeCard2 from "./HomeCard2";
import { HomeCard4 } from "./HomeCard4";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  HomeDetailsLayer1Images,
  HomeDetails1,
  HomeDetails2,
} from "./HomeDetails";
import { Image, Box } from "@chakra-ui/react";
const Home = () => {
  return (
    <Box>
      <Navbar />
      <Image
        src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
        alt="img"
        mt="10"
      />
      <HomeCard2 type={HomeDetails2} src="https://i.imgur.com/Gry0Q5D.png" />
      <br />
      <br />
      <br />
      <br />
      <HomeCard4
        text="As Seen on Shark Tank"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeCard4
        text="Trending Sunglasses"
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </Box>
  );
};

export default Home;

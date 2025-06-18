import React from "react";
import { Box, Grid, Center } from "@chakra-ui/react";
import { FooterCardColumn, FooterCardDisplayingDownloadLink, FooterCardLastRow } from "./FooterCard";
import { services, about, helps } from "./FooterDetails";

const Footer = () => {
  return (
    <Box
      bgColor="#eeeeee"
      color="blackAlpha.800"
      fontFamily={"'Poppins', sans-serif"}
      p={{ lg: "0", md: "5", base: "5" }}
    >
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)"
        }}
        justifyContent="space-between"
        textAlign="left"
        ml="2%"
      >
        <Box w="60%" pl="5">
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)"
            }}
            gap="5"
          >
            <FooterCardColumn type={services} heading="Services" />
            <FooterCardColumn type={about} heading="About Us" />
            <FooterCardColumn type={helps} heading="Help" />
          </Grid>
        </Box>
        <Center>
          <FooterCardDisplayingDownloadLink />
        </Center>
      </Grid>
      <hr />
      <FooterCardLastRow />
    </Box>
  );
};

export default Footer;

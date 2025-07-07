import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { NavbarCardTopmost, NavbarCardCategoryList } from "./NavbarCard";
import Nav from "./Nav";

const Navbar = () => {
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("blackAlpha.800", "gray.200");

  return (
    <Box overflow="hidden" bg={bgColor} color={textColor}>
      <Box display={{ base: "none", xl: "inherit" }} color={textColor}>
        <NavbarCardTopmost />
        <NavbarCardCategoryList />
      </Box>
      <Nav />
    </Box>
  );
};

export default Navbar;

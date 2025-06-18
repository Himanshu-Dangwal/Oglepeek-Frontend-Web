import React from "react";
import { Box } from "@chakra-ui/react";
import { NavbarCardTopmost, NavbarCardCategoryList } from "./NavbarCard";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <Box overflow="hidden" bg="white">
      <Box display={{ base: "none", xl: "inherit" }} color="blackAlpha.800">
        <NavbarCardTopmost />
        <NavbarCardCategoryList />
      </Box>
      <Nav />
    </Box>
  );
};

export default Navbar;

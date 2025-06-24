import React from "react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import NavbarCardCategories from "./NavbarCardCategories";
import { NavbarDetail1 } from "./NavbarDetail";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { TriangleDownIcon } from "@chakra-ui/icons";
import Oglepeek from './Oglepeek.jpeg';
import {
  Box,
  Text,
  Flex,
  Spacer,
  Image,
  Input,
  Button,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody
} from "@chakra-ui/react";

export const NavbarCard1 = () => {
  return (
    <Box cursor="pointer">
      <Flex gap={2} pl={5} pt={2}>
        {NavbarDetail1.map((i, index) => (
          <Box key={index}>
            <Text fontSize="12px" _hover={{ textDecoration: "underline" }}>
              {i.labels}
            </Text>
            <Spacer />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export const NavbarCardTopmost = () => {
  const { isAuth, setisAuth, Authdata, setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetch("http://localhost:8000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setisAuth(false);
    setAuthData(null);
  }

  return (
    <Box cursor="pointer">
      <HStack m="auto">
        <Box w="20%">
          <Link to="/">
            <Image src={Oglepeek} alt="logo" style={{ width: '40%', height: 'auto', marginLeft: "10%" }} />
          </Link>
        </Box>
        <HStack w="85%" m="auto">
          <Box w="20%">
            <HStack fontSize="15px" fontWeight="bold">
              <FiPhoneCall />
              <Text>+(977)-986-8956905</Text>
            </HStack>
          </Box>
          <Box w="55%">
            <Input
              placeholder="What are you looking for"
              border="1px solid black"
              w="95%"
              fontSize="17px"
              h="45px"
            />
          </Box>
          <HStack w="35%">
            <Button
              size="lg"
              bg="whiteAlpha.900"
              fontSize="14px"
              fontWeight="400"
              onClick={() => navigate("/orderhistory")}
            >
              Track Order
            </Button>
            {isAuth === true ? (
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Box
                    fontWeight={"600"}
                    fontSize="15px"
                    m="auto"
                    mt="20px"
                    w="90px"
                    textAlign="center"
                  >
                    {Authdata.firstName}
                    <TriangleDownIcon
                      ml="2px"
                      fontSize={"9px"}
                      _hover={{ transform: "rotate(180deg)" }}
                    />
                  </Box>
                </PopoverTrigger>
                <PopoverContent
                  w="120px"
                  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                >
                  <PopoverBody
                    h={"40px"}
                    pl="6"
                    fontSize="15px"
                    _hover={{ fontWeight: "bold" }}
                  >
                    <Box
                      color="#333368"
                      onClick={() => {
                        handleLogout();
                        return <Navigate to="/" />;
                      }}
                    >
                      Sign Out
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Box display={"flex"}>
                <Login />
                <Signup />
              </Box>
            )}
            <Button
              leftIcon={<CiHeart />}
              size="lg"
              bg="whiteAlpha.900"
              fontSize="14px"
              fontWeight="400"
              onClick={() => navigate("/wishlist")}
            >
              Wishlist
            </Button>
            <Link to="/cart">
              <Button
                leftIcon={<CgShoppingCart />}
                size="lg"
                bg="whiteAlpha.900"
                fontSize="14px"
                fontWeight="400"
              >
                Cart
              </Button>
            </Link>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export const NavbarCardCategoryList = () => {
  return (
    <Box cursor="pointer" bg="#fbf9f7" p={2.5}>
      <Flex gap={4} pl={5} pt={2} justifyContent="space-between">
        <NavbarCardCategories />
      </Flex>
    </Box>
  );
};

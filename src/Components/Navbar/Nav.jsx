import React, { useContext } from "react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import Oglepeek from './Oglepeek.png';
import { BsHeartFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
  HStack,
  Image,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerBody,
  Heading,
  Avatar,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  useBreakpointValue,
  useColorModeValue,
  useColorMode,
  Switch
} from "@chakra-ui/react";
import { clearCart } from "../../redux/CartPage/action";
import { clearWishlist } from "../../redux/wishlist/wishlist.actions";

function Nav() {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const { isAuth, setisAuth, Authdata, setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🌙 Dark Mode Colors
  const bgColor = useColorModeValue("#fbf9f7", "gray.600");
  const drawerBg = useColorModeValue("whiteAlpha.900", "gray.900");
  const textColor = useColorModeValue("black", "whiteAlpha.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverFontWeight = useColorModeValue("bold", "bold");
  const buttonBg = useColorModeValue("whiteAlpha.900", "gray.700");


  //Breakpoint 
  const buttonSize = useBreakpointValue({ base: "sm", md: "lg" });


  //Cart and Wishlist
  const { cart } = useSelector((state) => state.CartReducer);
  const { wishlist } = useSelector((state) => state.wishlistReducer);

  const handleLogout = async () => {
    let HOST = process.env.REACT_APP_HOST;

    try {
      await fetch(`${HOST}/api/auth/logout`, {
        method: "POST",
        credentials: "include", // ✅ ensure cookie is cleared
      });

      // Clear redux states
      dispatch(clearCart());
      dispatch(clearWishlist());

      localStorage.removeItem("wishlist"); // Clear wishlist from local storage

      // Clear auth context
      setisAuth(false);
      setAuthData(null);

      onClose(); // close the drawer
      navigate("/"); // redirect to homepage
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <Box display={{ lg: "inherit", xl: "none" }} cursor="pointer" bg={bgColor} p={2.5}>
      <HStack m="auto" justifyContent="space-between">
        <Box w={{ lg: "20%", md: "20%", sm: "22%", base: "30%" }}>
          <Link to="/">
            <Image
              src={Oglepeek}
              alt="logo"
              style={{ width: '40%', height: 'auto', marginLeft: "10%" }}
              w={{ lg: "75%", md: "100%", sm: "100%", base: "100%" }}
            />
          </Link>
        </Box>

        <Flex
          w="70%"
          justify="flex-end"
          align="center"
          gap={2} // controls space between buttons
          pr={2}
        >
          {/* Wishlist Button */}
          <Box position="relative">
            <Button
              leftIcon={wishlist.length > 0 ? <BsHeartFill color="red" /> : <CiHeart />}
              size={buttonSize}
              bg={buttonBg}
              fontSize="10px"
              fontWeight="400"
              onClick={() => navigate("/wishlist")}
            >
              Wishlist
            </Button>
            {wishlist.length > 0 && (
              <Box
                position="absolute"
                top="0"
                right="-5px"
                bg="red.500"
                color="white"
                fontSize="8px"
                borderRadius="full"
                px="2"
                h="18px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {wishlist.length}
              </Box>
            )}
          </Box>

          {/* Cart Button */}
          <Box position="relative">
            <Button
              leftIcon={<CgShoppingCart />}
              size={buttonSize}
              bg={buttonBg}
              fontSize="10px"
              fontWeight="400"
              onClick={() => navigate("/cart")}
            >
              Cart
            </Button>
            {cart.length > 0 && (
              <Box
                position="absolute"
                top="0"
                right="-5px"
                bg="red.500"
                color="white"
                fontSize="8px"
                borderRadius="full"
                px="1.5"
                minW="18px"
                h="18px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex="1"
              >
                {cart.length}
              </Box>
            )}
          </Box>
        </Flex>

        <Box>
          <Button colorScheme="blue" p="0" onClick={onOpen}>
            <HamburgerIcon fontSize="20px" />
          </Button>
          <Drawer
            size="xs"
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent color={textColor} bg={drawerBg}>
              <DrawerCloseButton />
              <DrawerHeader>
                <Flex justifyContent="flex-start" mb={2}>
                  <Text fontSize="sm" mr={2}>
                    {colorMode === "light" ? "Light Mode" : "Dark Mode"}
                  </Text>
                  <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
                </Flex>
                {isAuth ? (
                  <Flex
                    borderBottom="2px solid"
                    borderColor="teal.400"
                    p="5%"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                  >
                    <Flex w="100%">
                      <Avatar
                        src="https://bit.ly/broken-link"
                        size="lg"
                        mr="2"
                      />
                      <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                      >
                        <Text mt="10px" fontSize="20px">{Authdata.firstName}</Text>
                        <Text color="gray.400" mt="5%" fontSize="sm">
                          Enjoy Buy 10 Get 1 free for every 10th order
                        </Text>
                      </Flex>
                    </Flex>
                    <Button
                      w="100%"
                      h="35px"
                      mt="5%"
                      colorScheme="blue"
                      fontSize="15px"
                      _hover={{ bg: "blue.400" }}
                    >
                      GET GOLD MEMBERSHIP
                    </Button>
                  </Flex>
                ) : (
                  <Box
                    p="5%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                  >
                    <Box
                      w="100%"
                      display="flex"
                      justifyContent="space-evenly"
                      mb="-6%"
                    >
                      <Box bg="blue.500" p="10px 15px" rounded="lg" _hover={{ bg: "blue.200" }}>
                        <Login />
                      </Box>
                      <Box bg="blue.500" p="10px 15px" rounded="lg" _hover={{ bg: "blue.200" }}>
                        <Signup />
                      </Box>
                    </Box>
                  </Box>
                )}
              </DrawerHeader>

              <DrawerBody borderBottomWidth="1px">
                <Box display="flex" flexDirection="column" fontSize="16px">
                  {[
                    { path: "/orderhistory", label: "My Orders" },
                    { path: "/cart", label: "Cart" },
                    { path: "/wishlist", label: "Wishlist" },
                  ].map(({ path, label }) => (
                    <Link to={path} key={path}>
                      <Box
                        borderBottom="1px solid"
                        borderColor={borderColor}
                        fontSize="15px"
                        p="4% 0%"
                        color={textColor}
                        _hover={{ fontWeight: hoverFontWeight }}
                      >
                        {label}
                      </Box>
                    </Link>
                  ))}
                  {/* <Link>
                    <Box borderBottom="1px solid" borderColor={borderColor} fontSize="15px" p="4% 0%" _hover={{ fontWeight: hoverFontWeight }}>
                      Manage Notification
                    </Box>
                  </Link> */}
                  <Link>
                    <Box borderBottom="1px solid" borderColor={borderColor} fontSize="15px" p="4% 0%" _hover={{ fontWeight: hoverFontWeight }}>
                      Contact Us
                    </Box>
                  </Link>
                </Box>

                <Heading mt="15%" fontSize="15px" mb="5%">SHOP NOW</Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Accordion allowMultiple w="100%" m="auto">
                    {["Men", "Women", "Unisex"].map((category) => (
                      <AccordionItem key={category}>
                        <h2>
                          <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="500">
                              {category}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Link to="/products">
                            <Box>
                              <Text pb="2">EYEGLASSES</Text>
                              <Text pb="2">COMPUTER GLASSES</Text>
                              <Text pb="2">CONTACT LENSES</Text>
                              <Text pb="2">SUN GLASSES</Text>
                            </Box>
                          </Link>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Box>

                <Heading mt="15%" mb="5%" fontSize="15px">HIGHLIGHTS</Heading>
                {[
                  "Check Frame Size",
                  "Try Frames in 3D [Coming Soon!]",
                  "Download Apps [Coming Soon!]"
                ].map((text, i) => (
                  <Link key={i}>
                    <Box
                      borderBottom="1px solid"
                      borderColor={borderColor}
                      p="5% 0%"
                      _hover={{ fontWeight: hoverFontWeight }}
                      fontSize="15px"
                    >
                      {text}
                    </Box>
                  </Link>
                ))}

                <Heading mt="15%" fontSize="15px" mb="5%">FAQ's & POLICIES</Heading>
                {[
                  "Frequently Asked Questions",
                  "Cancellation & Return Policy",
                ].map((text, i) => (
                  <Link key={i}>
                    <Box
                      borderBottom={i < 2 ? "1px solid" : "none"}
                      borderColor={borderColor}
                      p="5% 0%"
                      _hover={{ fontWeight: hoverFontWeight }}
                      fontSize="15px"
                    >
                      {text}
                    </Box>
                  </Link>
                ))}
              </DrawerBody>

              {isAuth && (
                <DrawerFooter>
                  <Button
                    mt="5%"
                    fontSize="18px"
                    colorScheme="blue"
                    p="6% 15%"
                    _hover={{ bg: "blue.200" }}
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </DrawerFooter>
              )}
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack >
    </Box >
  );
}

export default Nav;

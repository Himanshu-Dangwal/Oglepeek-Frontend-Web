import React, { useContext } from "react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import Oglepeek from './Oglepeek.png';
import {
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
  HStack,
  Image,
  Input,
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

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const { isAuth, setisAuth, Authdata, setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();
  const placeholder = useBreakpointValue({ sm: "What are you looking for", base: "Search for products" });

  // 🌙 Dark Mode Colors
  const bgColor = useColorModeValue("#fbf9f7", "gray.600");
  const drawerBg = useColorModeValue("whiteAlpha.900", "gray.900");
  const textColor = useColorModeValue("black", "whiteAlpha.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverFontWeight = useColorModeValue("bold", "bold");

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
        <Box w="70%" display={{ sm: "inherit", base: "inherit" }}>
          <Input
            placeholder={placeholder}
            border="1px solid"
            borderColor="black"
            w="90%"
            fontSize="16px"
            h="35px"
            color={textColor}
            bg={useColorModeValue("white", "gray.700")}
          />
        </Box>

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
                          Enjoy Buy 1 Get 1 offer for 365 days
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
                  <Link>
                    <Box borderBottom="1px solid" borderColor={borderColor} fontSize="15px" p="4% 0%" _hover={{ fontWeight: hoverFontWeight }}>
                      Manage Notification
                    </Box>
                  </Link>
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
                  "Cobrowsing"
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
                    onClick={() => {
                      setisAuth(false);
                      localStorage.removeItem("token");
                      localStorage.removeItem("firstName");
                      setAuthData(null);
                      navigate("/");
                    }}
                  >
                    Sign Out
                  </Button>
                </DrawerFooter>
              )}
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack>
    </Box>
  );
}

export default Nav;

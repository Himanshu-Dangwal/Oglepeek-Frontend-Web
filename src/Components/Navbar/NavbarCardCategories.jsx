import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../Pages/Home/images/oglepeekMan.jpeg";
import image2 from "../../Pages/Home/images/oglepeekGirl.jpeg";
import image3 from "../../Pages/Home/images/OglepeekMan2.jpeg";
import {
  Avatar,
  Box,
  Flex,
  Grid,
  useColorModeValue
} from "@chakra-ui/react";
import HoverMenu from "./HoverMenu"; // Import HoverMenu component
import "../../App.css";

function NavbarCardCategories() {
  const bgColor = useColorModeValue("white", "gray.700");
  const bgKids = useColorModeValue("whiteAlpha.900", "gray.800");
  // const textColor = useColorModeValue("blackAlpha.800", "gray.200");
  return (
    <Flex bg={bgColor} cursor="pointer" gap="20">
      {/* EYEGLASSES */}
      <HoverMenu label="EYEGLASSES">
        <Link to="/products">
          <Grid gridTemplateColumns="repeat(5, 1fr)" w="100%" ml={10}>
            {/* Gender Column */}
            <Flex direction="column" justifyContent="space-evenly" mt="10">
              <Flex gap="5">
                <Avatar name="Model 1-Men" src={image1} alt="men" size="md" />
                <Box fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                  Men
                </Box>
              </Flex>
              <Flex gap="5">
                <Avatar name="Model 2-Women" src={image2} alt="women" size="md" />
                <Box fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                  Women
                </Box>
              </Flex>
              <Flex gap="5">
                <Avatar name="Model 3-Unisex" src={image3} alt="kid" size="md" />
                <Box fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "underline" }}>
                  Unisex
                </Box>
              </Flex>
            </Flex>

            {/* Categories */}
            <Flex direction="column" gap="6">
              <Box fontSize="md" fontWeight="bold" borderBottom="1px solid black" p="1">
                SELECT CATEGORY
              </Box>
              <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }}>
                CLASSIC EYE-GLASSES
                <p>Starting From NPR <span>1199</span></p>
              </Box>
              <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }}>
                PREMIUM EYE-GLASSES
                <p>Starting From NPR <span>3000</span></p>
              </Box>
              <Box fontSize="md" _hover={{ bg: "blackAlpha.200" }}>
                COMPUTER-GLASSES
                <p>Starting From NPR <span>1299</span></p>
              </Box>
            </Flex>

            {/* Top Picks */}
            <Flex direction="column" gap="6">
              <Box fontSize="md" fontWeight="bold" borderBottom="1px solid black" p="1">
                Our Top Picks
              </Box>
              <Flex direction="column" fontSize="md" gap="2">
                <Box _hover={{ fontWeight: "bold" }}>New Arrivals</Box>
                <Box _hover={{ fontWeight: "bold" }}>Best Seller</Box>
                <Box _hover={{ fontWeight: "bold" }}>Trending</Box>
                <Box _hover={{ fontWeight: "bold" }}>Tinted Eyeglasses</Box>
                <Box _hover={{ fontWeight: "bold" }}>Computer Eyeglasses</Box>
              </Flex>
            </Flex>

            {/* Frame Type */}
            <Flex direction="column" gap="6">
              <Box fontSize="md" fontWeight="bold" borderBottom="1px solid black" p="1">
                Frame Type
              </Box>
              <Flex direction="column" fontSize="md" gap="2">
                <Box _hover={{ fontWeight: "bold" }}>Rectangle Frames</Box>
                <Box _hover={{ fontWeight: "bold" }}>Wayfarer Frames</Box>
                <Box _hover={{ fontWeight: "bold" }}>Round Frames</Box>
                <Box _hover={{ fontWeight: "bold" }}>Aviator Frames</Box>
                <Box _hover={{ fontWeight: "bold" }}>Cat-Eye Frames</Box>
                <Box _hover={{ fontWeight: "bold" }}>Rimless Frames</Box>
                <Box _hover={{ fontWeight: "bold" }}>Half Rim Frames</Box>
                <Box _hover={{ fontWeight: "bold" }}>Geometric Frames</Box>
              </Flex>
            </Flex>
          </Grid>
        </Link>
      </HoverMenu>

      {/* Repeat for other categories using the same HoverMenu pattern */}

      <HoverMenu label="COMPUTER GLASSES">
        {/* Place the Computer Glasses MenuList content here */}
        <Link to="/products">
          <Box>
            <Grid gridTemplateColumns="repeat(5, 1fr)" w="100%">
              <Flex
                direction="column"
                gap="4"
                justifyContent="space-evenly"
                mt="20"
              >
                <Flex gap="5">
                  <Avatar
                    name="Model 1-Men"
                    src={image1}
                    alt="men"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Men
                  </Box>
                </Flex>

                <Flex gap="5">
                  <Avatar
                    name="Model 2-Women"
                    src={image2}
                    alt="women"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Women
                  </Box>
                </Flex>

                <Flex gap="5">
                  <Avatar
                    name="Model 3-Men"
                    src={image3}
                    alt="kid"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Unisex
                  </Box>
                </Flex>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  SELECT CATEGORY
                </Box>

                <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md">
                  Blue Cut
                  <p>
                    Starting From NPR <span>1299</span>
                  </p>
                </Box>
                <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md">
                  Power
                  <p>
                    Starting From NPR <span>3000</span>
                  </p>
                </Box>
              </Flex>
            </Grid>
          </Box>
        </Link>
      </HoverMenu>

      <HoverMenu label="KIDS GLASSES">
        {/* Place the Kids Glasses MenuList content here */}
        <Link to="/products">
          <Box>
            <Grid
              gridTemplateColumns="repeat(3, 1fr)"
              justifyContent="center"
              p="5"
            >
              <Box bg={bgKids} h="250px" w="240px">
                <img
                  className="navImg1"
                  src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg"
                  alt="kidsIcon_1"
                />
                <Box mt="10px" textAlign="center" fontSize="lg">
                  Eye Glasses
                </Box>
              </Box>
              <Box bg={bgKids} h="250px" w="240px">
                <img
                  className="navImg2"
                  src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg"
                  alt="kidsIcon_2"
                />
                <Box mt="10px" textAlign="center" fontSize="lg">
                  Zero Power Computer Glasses
                </Box>
              </Box>
              <Box bg={bgKids} h="250px" w="240px">
                <img
                  className="navImg2"
                  src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg"
                  alt="kidsIcon_3"
                />
                <Box mt="10px" textAlign="center" fontSize="lg">
                  Sun Glasses
                </Box>
              </Box>
            </Grid>
          </Box>
        </Link>
      </HoverMenu>

      <HoverMenu label="CONTACT LENSES">
        {/* Place the Contact Lenses MenuList content here */}
        <Link to="/products">
          <Box>
            <Grid gridTemplateColumns="repeat(5, 1fr)" p="1" w="100%">
              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  Disposability
                </Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}> Monthly</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Day & Night</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Daily</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Yearly</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Bi-weekly</Box>
                </Flex>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  Power
                </Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}>Spherical - CYL</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Spherical + CYL</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Cylindrical</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Toric Power</Box>
                </Flex>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  Colors
                </Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}>Green</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Blue</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Brown</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Turquoise</Box>
                  <Box _hover={{ fontWeight: "bold" }}>View all colors</Box>
                </Flex>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  Solution
                </Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}>Small</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Large</Box>
                  <Box _hover={{ fontWeight: "bold" }}>
                    View all solutions
                  </Box>
                </Flex>
              </Flex>
            </Grid>
          </Box>
        </Link>
      </HoverMenu>

      <HoverMenu label="SUN GLASSES">
        {/* Place the Sun Glasses MenuList content here */}
        <Link to="/products">
          <Box>
            <Grid gridTemplateColumns="repeat(6, 1fr)">
              <Flex direction="column" justifyContent="space-evenly" mt={10}>
                <Flex gap="5">
                  <Avatar
                    name="Model 1-Men"
                    src={image1}
                    alt="men"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Men
                  </Box>
                </Flex>

                <Flex gap="5">
                  <Avatar
                    name="Model 2-Women"
                    src={image2}
                    alt="women"
                    size="md"
                  />
                  <Box
                    _hover={{ textDecoration: "underline" }}
                    fontSize="md"
                    fontWeight="bold"
                  >
                    Women
                  </Box>
                </Flex>
                <Flex gap="5">
                  <Avatar
                    name="Model 3-Men"
                    src={image3}
                    alt="kid"
                    size="md"
                  />
                  <Box
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Unisex
                  </Box>
                </Flex>

              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  SELECT CATEGORY
                </Box>
                <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md">
                  CLASSIC SUNGLASSES
                  <p>
                    Starting From ₹ <span>1299</span>
                  </p>
                </Box>
                <Box _hover={{ bg: "blackAlpha.200" }} fontSize="md" p="2">
                  PREMIUM SUNGLASSES
                  <p>
                    Starting From ₹ <span>2500</span>
                  </p>
                </Box>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  Our Top Picks
                </Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}>New Arrivals</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Best Seller</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Pilot Style</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Power Sunglasses</Box>
                  <Box _hover={{ fontWeight: "bold" }}>
                    Polarized Sunglasses
                  </Box>
                </Flex>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  Shape
                </Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}>Aviator</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Rounders</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Wayfarer</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Rectangle</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Hexagon</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Cat-Eye</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Clubmaster</Box>
                </Flex>
              </Flex>

              <Flex direction="column" gap="6">
                <Box
                  fontSize="md"
                  fontWeight="bold"
                  borderBottom="1px solid black"
                  p="1"
                >
                  Colections
                </Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}>Glam Slam</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Havana</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Polarized</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Power Sunglasses</Box>
                  <Box _hover={{ fontWeight: "bold" }}>
                    Designer Sunglasses
                  </Box>
                </Flex>
              </Flex>
            </Grid>
          </Box>
        </Link>
      </HoverMenu>
    </Flex>
  );
}

export default NavbarCardCategories;



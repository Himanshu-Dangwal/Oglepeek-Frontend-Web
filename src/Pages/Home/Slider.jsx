import React from "react";
import {
  Box,
  Image,
  // Square,
  Link,
  Text,
  Button,
  Center,
  VStack,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";

const Slider = ({ type }) => {
  const navigate = useNavigate();
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 4000 }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        200: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        660: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        749: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {type.map((i) => (
        <Box key={i.id}>
          <SwiperSlide key={i.id}>
            <Link to={i.linked}>
              <Box w="100%" display="flex" justifyContent="center">
                <Image
                  src={`${i.img}`}
                  alt={i.name}
                  maxW="100%"
                  maxH="100px"
                  objectFit="contain"
                  borderRadius="md"
                />
              </Box>
            </Link>
            <VStack m="auto">
              <Center>
                <Text
                  pt={5}
                  pb={5}
                  fontWeight="bold"
                  fontSize="18px"
                  fontFamily="Futura-Medium"
                >
                  {i.name}
                </Text>
              </Center>
              <Button p="20px 40px" colorScheme="teal" m="auto" fontSize="17px" onClick={() => navigate("/products")}>
                Explore
              </Button>
            </VStack>
          </SwiperSlide>
        </Box>
      ))}
    </Swiper>
  );
};

export default Slider;

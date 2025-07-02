import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
  Container, SimpleGrid, Box, Image, Wrap, Heading, Text,
  Stack, HStack, Button, IconButton, Accordion, AccordionItem,
  AccordionButton, AccordionPanel, AccordionIcon, NumberInput,
  NumberInputField, NumberInputStepper, NumberIncrementStepper,
  NumberDecrementStepper, Spinner, useColorModeValue
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import Slider from "react-slick";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { addToCart } from "../../redux/CartPage/action";
import { addToWishlist } from "../../redux/wishlist/wishlist.actions";
import { useToast } from "@chakra-ui/react";

const SingleProductPage = () => {
  const sliderRef = useRef(null);
  const { id } = useParams();
  const toast = useToast();
  const [product, setProduct] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const borderColor = useColorModeValue("gray.200", "gray.600");
  const bgOnExpand = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/product/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to load product", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <Spinner size="xl" mt={20} />;

  const variant = product.variants[selectedVariantIndex];
  const imageSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    beforeChange: (_, next) => setCurrentImageIndex(next),
  };

  const handleVariantSelect = (index) => {
    setCurrentImageIndex(0);
    setSelectedVariantIndex(index);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    const variant = product.variants[selectedVariantIndex];
    const item = {
      productId: product._id,
      variantId: variant._id,
      quantity,
      name: product.name,
      price: variant?.price,
      image: variant?.images[0],
      frameColor: variant?.frameColor,
      frameStyle: product.frameStyle,
      material: product.material,
      lens: product.lens,
      frameType: product.frameType,
      description: product.description
    };

    const exists = cart.find(
      (c) => c.productId === item.productId && c.variantId === item.variantId
    );

    if (!exists) {
      dispatch(addToCart(item));
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "Already in Cart",
        description: "This product is already in your cart.",
        status: "info",
        duration: 2500,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const handleAddToWishlist = () => {
    const variant = product.variants[selectedVariantIndex];
    const item = {
      productId: product._id,
      variantId: variant._id,
      image: variant.images[0],
      name: product.name,
      price: variant.price,
      frameStyle: product.frameStyle,
      frameColor: variant.frameColor,
      description: product.description,
      material: product.material,
      lens: product.lens,
      frameType: product.frameType,
    };
    dispatch(addToWishlist(item));
  };

  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={{ base: 6, md: 10 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
          {/* Image Carousel Section */}
          <Box>
            <Box borderWidth="1px" borderColor={borderColor} borderRadius="md" p={0} mb={2}>
              <Slider key={selectedVariantIndex} ref={sliderRef} {...imageSliderSettings}>
                {variant?.images.map((img, idx) => (
                  <Box key={idx} position="relative">
                    <Image
                      src={img}
                      alt={`Variant image ${idx + 1}`}
                      objectFit="cover"
                      w="100%"
                      h={{ base: "200px", sm: "300px", md: "400px", lg: "500px" }}
                      borderRadius="md"
                    />
                    <Box
                      position="absolute"
                      top="2"
                      right="2"
                      bg="blackAlpha.600"
                      color="white"
                      px="2"
                      py="1"
                      borderRadius="md"
                      fontSize="sm"
                    >
                      {currentImageIndex + 1} / {variant?.images.length}
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
            <Wrap spacing={3} justify="center">
              {product.variants.map((v, vIdx) => (
                <Box
                  key={v._id}
                  borderWidth={selectedVariantIndex === vIdx ? "2px" : "1px"}
                  borderColor={selectedVariantIndex === vIdx ? "blue.500" : borderColor}
                  borderRadius="lg"
                  p={1}
                  cursor="pointer"
                  _hover={{ transform: "scale(1.05)", transition: "all 0.2s" }}
                  onClick={() => handleVariantSelect(vIdx)}
                >
                  <Image
                    src={v.images[0]}
                    alt={`Variant ${v.frameColor}`}
                    boxSize="60px"
                    objectFit="cover"
                    borderRadius="lg"
                  />
                </Box>
              ))}
            </Wrap>
          </Box>

          {/* Product Info Section */}
          <Stack spacing={5}>
            <Box>
              <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} mb={2}>{product.name}</Heading>
              <Text fontSize="xl" fontWeight="bold">NPR {variant.price.toFixed(2)}</Text>
            </Box>

            <Text fontSize="md" color="orange.500">
              {variant.inStock < 5 ? `Hurry! Only ${variant.inStock} left` : 'In stock'}
            </Text>

            <HStack align="center">
              <Text>Quantity:</Text>
              <NumberInput
                size="md"
                width="100px"
                min={1}
                max={variant.inStock}
                value={quantity}
                onChange={(val) => setQuantity(Number(val))}
              >
                <NumberInputField aria-label="Quantity" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>

            <Stack direction={{ base: "column", md: "row" }} spacing={3}>
              <Button colorScheme="blue" flex={1} size="lg" onClick={handleAddToCart}>Add to Cart</Button>
              <IconButton aria-label="Add to wishlist" icon={<FaHeart />} variant="outline" colorScheme="pink" size="lg" onClick={handleAddToWishlist} />
            </Stack>

            <Box>
              <Text fontWeight="semibold" mb={2}>Available Colors:</Text>
              <HStack spacing={3} wrap="wrap">
                {product.variants.map((v, idx) => (
                  <Box
                    key={v._id}
                    onClick={() => handleVariantSelect(idx)}
                    cursor="pointer"
                    borderWidth="2px"
                    borderColor={idx === selectedVariantIndex ? "blue.500" : borderColor}
                    p={1}
                    borderRadius="md"
                  >
                    <Image src={v.images[0]} alt={v.frameColor} boxSize="50px" borderRadius="md" objectFit="cover" />
                  </Box>
                ))}
              </HStack>
            </Box>

            <Accordion allowToggle mt={4}>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: bgOnExpand, fontWeight: "bold" }}>
                    <Box flex="1" textAlign="left">Description</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text color={textColor}>{product.description}</Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: bgOnExpand, fontWeight: "bold" }}>
                    <Box flex="1" textAlign="left">Specifications</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing={1} color={textColor}>
                    <Text><strong>Frame Style:</strong> {product.frameStyle}</Text>
                    <Text><strong>Frame Type:</strong> {product.frameType}</Text>
                    <Text><strong>Lens:</strong> {product.lens}</Text>
                    <Text><strong>Material:</strong> {product.material}</Text>
                    <Text><strong>Gender:</strong> {product.gender}</Text>
                    <Text><strong>Product Type:</strong> {product.productType}</Text>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: bgOnExpand, fontWeight: "bold" }}>
                    <Box flex="1" textAlign="left">Shipping & Returns</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text color={textColor}>Free shipping on orders over $50. 30-day returns available for all items unless marked final sale.</Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: bgOnExpand, fontWeight: "bold" }}>
                    <Box flex="1" textAlign="left">Size Chart</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Image
                    src="https://i.imgur.com/NkSyc4I.png"
                    alt="Size Chart"
                    maxH="400px"
                    mx="auto"
                    objectFit="contain"
                    borderRadius="md"
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
};

export default SingleProductPage;

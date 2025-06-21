// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../redux/CartPage/action";
// import { addToWishlist } from "../../redux/wishlist/wishlist.actions";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footer";
// import ProdCard from "./ProdCard";
// import { Grid, GridItem, Image, Box, Select, Text } from "@chakra-ui/react";
// import axios from "axios";

// const SingleProduct = () => {
// const { id } = useParams();
// const [product, setProduct] = useState(null);
// const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
// const navigate = useNavigate();
// const dispatch = useDispatch();
// const { cart } = useSelector((state) => state.CartReducer);

// useEffect(() => {
//   axios
//     .get(`http://localhost:8000/api/product/${id}`)
//     .then((res) => {
//       setProduct(res.data);
//     })
//     .catch((err) => console.error("Error fetching product:", err));
// }, [id]);

//   const handleAddToCart = () => {
//     const variant = product.variants[selectedVariantIndex];
//     const item = { ...product, ...variant };
//     const exists = cart.find((c) => c._id === item._id);

//     if (!exists) {
//       item.quantity = 1;
//       dispatch(addToCart(item));
//       setTimeout(() => navigate("/cart"), 1000);
//     } else {
//       alert("Product already in cart");
//     }
//   };

//   const handleAddToWishlist = () => {
//     const item = { ...product, ...product.variants[selectedVariantIndex] };
//     dispatch(addToWishlist(item));
//     setTimeout(() => navigate("/wishlist"), 1000);
//   };

//   if (!product) return null;
//   const selectedVariant = product.variants[selectedVariantIndex];

//   return (
//     <>
// <Navbar />
// <br />
// <br />

//       <Grid
//         gap={5}
//         m="auto"
//         w="95%"
//         justifyContent="space-around"
//         templateColumns={{
//           base: "repeat(1,1fr)",
//           sm: "repeat(1,1fr)",
//           md: "repeat(2,1fr)",
//           lg: "repeat(2,1fr)"
//         }}
//       >
//         <GridItem>
//           <Image
//             src={selectedVariant.images[0]}
//             alt={product.name}
//             borderRadius="md"
//             objectFit="cover"
//             w="100%"
//             maxH="500px"
//           />
//           <Box mt={4}>
//             <Text fontWeight="bold" mb={2}>Select Frame Color</Text>
//             <Select
//               value={selectedVariantIndex}
//               onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
//             >
//               {product.variants.map((v, i) => (
//                 <option key={v._id} value={i}>
//                   {v.frameColor} — ₹{v.price} ({v.size})
//                 </option>
//               ))}
//             </Select>
//           </Box>
//         </GridItem>

//         <GridItem>
//           <ProdCard
//             type={{
//               ...product,
//               ...selectedVariant
//             }}
//             handleCart={handleAddToCart}
//             handleWishlist={handleAddToWishlist}
//           />
//         </GridItem>
//       </Grid>

//       <Footer />
//     </>
//   );
// };

// export default SingleProduct;


// Responsive and styled SingleProduct page using Chakra UI and API data
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Container, SimpleGrid, Box, Image, Wrap, Heading, Text,
//   Stack, HStack, Button, IconButton, Accordion, AccordionItem,
//   AccordionButton, AccordionPanel, AccordionIcon, NumberInput,
//   NumberInputField, NumberInputStepper, NumberIncrementStepper,
//   NumberDecrementStepper, Spinner, useColorModeValue
// } from '@chakra-ui/react';
// import { FaHeart } from 'react-icons/fa';
// import axios from 'axios';

// const SingleProductPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
//   const [quantity, setQuantity] = useState(1);

//   const borderColor = useColorModeValue("gray.200", "gray.600");
//   const bgOnExpand = useColorModeValue("gray.100", "gray.700");
//   const textColor = useColorModeValue("gray.700", "gray.300");

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8000/api/product/${id}`);
//         setProduct(res.data);
//         setMainImage(res.data.variants[0]?.images[0]);
//       } catch (error) {
//         console.error("Failed to load product", error);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) return <Spinner size="xl" mt={20} />;

//   const variant = product.variants[selectedVariantIndex];

//   const handleVariantSelect = (index) => {
//     setSelectedVariantIndex(index);
//     setMainImage(product.variants[index]?.images[0]);
//     setQuantity(1);
//   };

//   return (
//     <Container maxW="container.xl" py={{ base: 6, md: 10 }}>
//       <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
//         {/* Image Section */}
//         <Box>
//           <Box borderWidth="1px" borderColor={borderColor} borderRadius="md" p={4} mb={4}>
//             <Image
//               src={mainImage}
//               alt={product.name}
//               objectFit="cover"
//               w="100%"
//               h={{ base: "300px", sm: "400px", lg: "500px" }}
//               borderRadius="md"
//             />
//           </Box>
//           {/* Variant Thumbnails */}
//           <Wrap spacing={3} justify="center">
//             {variant.images.map((img, idx) => (
//               <Box
//                 key={idx}
//                 borderWidth={mainImage === img ? "2px" : "1px"}
//                 borderColor={mainImage === img ? "blue.500" : borderColor}
//                 borderRadius="md"
//                 p={1}
//                 cursor="pointer"
//                 onClick={() => setMainImage(img)}
//               >
//                 <Image src={img} alt={`Variant ${idx + 1}`} boxSize="60px" objectFit="cover" borderRadius="md" />
//               </Box>
//             ))}
//           </Wrap>
//         </Box>

//         {/* Product Info Section */}
//         <Stack spacing={5}>
//           <Box>
//             <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} mb={2}>{product.name}</Heading>
//             <Text fontSize="xl" fontWeight="bold">${variant.price.toFixed(2)} USD</Text>
//           </Box>

//           <Text fontSize="md" color="orange.500">
//             {variant.inStock < 5 ? `Hurry! Only ${variant.inStock} left` : 'In stock'}
//           </Text>

//           {/* Quantity */}
//           <HStack align="center">
//             <Text>Quantity:</Text>
//             <NumberInput
//               size="md"
//               width="100px"
//               min={1}
//               max={variant.inStock}
//               value={quantity}
//               onChange={(val) => setQuantity(Number(val))}
//             >
//               <NumberInputField aria-label="Quantity" />
//               <NumberInputStepper>
//                 <NumberIncrementStepper />
//                 <NumberDecrementStepper />
//               </NumberInputStepper>
//             </NumberInput>
//           </HStack>

//           {/* Actions */}
//           <Stack direction={{ base: "column", md: "row" }} spacing={3}>
//             <Button colorScheme="blue" flex={1} size="lg">Add to Cart</Button>
//             <IconButton aria-label="Add to wishlist" icon={<FaHeart />} variant="outline" colorScheme="pink" size="lg" />
//           </Stack>

//           {/* Variant Swatches */}
//           <Box>
//             <Text fontWeight="semibold" mb={2}>Available Colors:</Text>
//             <HStack spacing={3} wrap="wrap">
//               {product.variants.map((v, idx) => (
//                 <Box
//                   key={v._id}
//                   onClick={() => handleVariantSelect(idx)}
//                   cursor="pointer"
//                   borderWidth="2px"
//                   borderColor={idx === selectedVariantIndex ? "blue.500" : borderColor}
//                   p={1}
//                   borderRadius="md"
//                 >
//                   <Image src={v.images[0]} alt={v.frameColor} boxSize="50px" borderRadius="md" objectFit="cover" />
//                 </Box>
//               ))}
//             </HStack>
//           </Box>

//           {/* Accordions */}
//           <Accordion allowToggle defaultIndex={[]} mt={4}>
//             {/* Description */}
//             <AccordionItem>
//               <h2>
//                 <AccordionButton _expanded={{ bg: bgOnExpand, fontWeight: "bold" }}>
//                   <Box flex="1" textAlign="left">Description</Box>
//                   <AccordionIcon />
//                 </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//                 <Text color={textColor}>{product.description}</Text>
//               </AccordionPanel>
//             </AccordionItem>

//             {/* Specifications */}
//             <AccordionItem>
//               <h2>
//                 <AccordionButton _expanded={{ bg: bgOnExpand, fontWeight: "bold" }}>
//                   <Box flex="1" textAlign="left">Specifications</Box>
//                   <AccordionIcon />
//                 </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//                 <Stack spacing={1} color={textColor}>
//                   <Text><strong>Frame Style:</strong> {product.frameStyle}</Text>
//                   <Text><strong>Frame Type:</strong> {product.frameType}</Text>
//                   <Text><strong>Lens:</strong> {product.lens}</Text>
//                   <Text><strong>Material:</strong> {product.material}</Text>
//                   <Text><strong>Gender:</strong> {product.gender}</Text>
//                   <Text><strong>Product Type:</strong> {product.productType}</Text>
//                 </Stack>
//               </AccordionPanel>
//             </AccordionItem>

//             {/* Shipping Info - Placeholder */}
//             <AccordionItem>
//               <h2>
//                 <AccordionButton _expanded={{ bg: bgOnExpand, fontWeight: "bold" }}>
//                   <Box flex="1" textAlign="left">Shipping & Returns</Box>
//                   <AccordionIcon />
//                 </AccordionButton>
//               </h2>
//               <AccordionPanel pb={4}>
//                 <Text color={textColor}>Free shipping on orders over $50. 30-day returns available for all items unless marked final sale.</Text>
//               </AccordionPanel>
//             </AccordionItem>
//           </Accordion>
//         </Stack>
//       </SimpleGrid>
//     </Container>
//   );
// };

// export default SingleProductPage;


// Responsive and styled SingleProduct page using Chakra UI and API data
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, SimpleGrid, Box, Image, Wrap, Heading, Text,
  Stack, HStack, Button, IconButton, Accordion, AccordionItem,
  AccordionButton, AccordionPanel, AccordionIcon, NumberInput,
  NumberInputField, NumberInputStepper, NumberIncrementStepper,
  NumberDecrementStepper, Spinner, useColorModeValue
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const borderColor = useColorModeValue("gray.200", "gray.600");
  const bgOnExpand = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/product/${id}`);
        setProduct(res.data);
        setMainImage(res.data.variants[0]?.images[0]);
      } catch (error) {
        console.error("Failed to load product", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <Spinner size="xl" mt={20} />;

  const variant = product.variants[selectedVariantIndex];

  const handleVariantSelect = (index) => {
    setSelectedVariantIndex(index);
    setMainImage(product.variants[index]?.images[0]);
    setQuantity(1);
  };

  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={{ base: 6, md: 10 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
          {/* Image Section */}
          <Box>
            <Box borderWidth="1px" borderColor={borderColor} borderRadius="md" p={4} mb={4}>
              <Image
                src={mainImage}
                alt={product.name}
                objectFit="cover"
                w="100%"
                h={{ base: "300px", sm: "400px", lg: "500px" }}
                borderRadius="md"
              />
            </Box>
            {/* Variant Thumbnails (All Variant Images) */}
            <Wrap spacing={3} justify="center">
              {product.variants.map((v, vIdx) => (
                v.images.map((img, iIdx) => (
                  <Box
                    key={`${v._id}-${iIdx}`}
                    borderWidth={mainImage === img ? "2px" : "1px"}
                    borderColor={mainImage === img ? "blue.500" : borderColor}
                    borderRadius="md"
                    p={1}
                    cursor="pointer"
                    onClick={() => {
                      setMainImage(img);
                      setSelectedVariantIndex(vIdx);
                    }}
                  >
                    <Image src={img} alt={`Variant ${v.frameColor}`} boxSize="60px" objectFit="cover" borderRadius="md" />
                  </Box>
                ))
              ))}
            </Wrap>
          </Box>

          {/* Product Info Section */}
          <Stack spacing={5}>
            <Box>
              <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} mb={2}>{product.name}</Heading>
              <Text fontSize="xl" fontWeight="bold">${variant.price.toFixed(2)} USD</Text>
            </Box>

            <Text fontSize="md" color="orange.500">
              {variant.inStock < 5 ? `Hurry! Only ${variant.inStock} left` : 'In stock'}
            </Text>

            {/* Quantity */}
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

            {/* Actions */}
            <Stack direction={{ base: "column", md: "row" }} spacing={3}>
              <Button colorScheme="blue" flex={1} size="lg">Add to Cart</Button>
              <IconButton aria-label="Add to wishlist" icon={<FaHeart />} variant="outline" colorScheme="pink" size="lg" />
            </Stack>

            {/* Variant Swatches */}
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

            {/* Accordions */}
            <Accordion allowToggle defaultIndex={[]} mt={4}>
              {/* Description */}
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

              {/* Specifications */}
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

              {/* Shipping Info - Placeholder */}
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
            </Accordion>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
};

export default SingleProductPage;

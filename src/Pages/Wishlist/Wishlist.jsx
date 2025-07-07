import { useSelector, useDispatch } from "react-redux";
import { Box, Text, Button, Heading, Grid, useColorModeValue } from "@chakra-ui/react";
import { removeFromWishlist } from "../../redux/wishlist/wishlist.actions";
import { addToCart } from "../../redux/CartPage/action";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useToast } from "@chakra-ui/react"

const Wishlist = () => {
  const toast = useToast();
  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const { cart } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const color = useColorModeValue("gray.600", "gray.400");

  //Need to remove from localStorage as well
  const handleDelete = (productId, variantId) => {
    dispatch(removeFromWishlist({ productId, variantId }));
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedWishlist = wishlist.filter((item) => !(item.productId === productId && item.variantId === variantId));
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (wishlistItem) => {
    const quantity = 1
    const item = {
      productId: wishlistItem.productId,
      variantId: wishlistItem.variantId,
      image: wishlistItem.image,
      name: wishlistItem.name,
      price: wishlistItem.price,
      frameStyle: wishlistItem.frameStyle,
      frameColor: wishlistItem.frameColor,
      description: wishlistItem.description,
      material: wishlistItem.material,
      lens: wishlistItem.lens,
      frameType: wishlistItem.frameType,
      quantity
    };

    const exists = cart.find(
      (c) => c.productId === item.productId && c.variantId === item.variantId
    );
    if (!exists) {
      dispatch(addToCart(item));
      dispatch(removeFromWishlist({ productId: item.productId, variantId: item.variantId }));
      toast({
        title: "Added to Cart",
        description: `Item has been added to your cart.`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      dispatch(removeFromWishlist(item.productId, item.variantId));
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

  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <Box
        minHeight="635"
        w={{ lg: "80%", md: "90%", sm: "90%", base: "95%" }}
        m="auto"
      >
        <Heading
          fontSize="25px"
          textAlign="left"
          p="2"
          bg="teal.400"
          color="whiteAlpha.900"
          w={{ lg: "80%", md: "90%", sm: "90%", base: "95%" }}
          m="auto"
        >
          Wishlist
        </Heading>
        {wishlist.length === 0 ? (
          <Text
            textAlign="center"
            fontSize="28px"
            color="gray"
            mt="1%"
            fontWeight="bolder"
          >
            Your wishlist is empty.
          </Text>
        ) : (
          <Box>
            <Grid templateColumns="repeat(1,1fr)" gap={18} w={"100%"}>
              {wishlist &&
                wishlist &&
                wishlist.map((item) => (
                  <Box
                    key={item.id}
                    borderWidth="1px"
                    boxShadow="2xl"
                    p="4"
                    my="4"
                    w={{ lg: "80%", md: "90%", sm: "90%", base: "95%" }}
                    m="auto"
                  >
                    <Grid
                      m="auto"
                      templateColumns={{
                        base: "repeat(1,1fr)",
                        sm: "repeat(1,1fr)",
                        md: "repeat(1,1fr)",
                        lg: "60% 40%",
                        xl: "70% 30%"
                      }}
                      justify="space-between"
                      mb="2"
                    >
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={{ sm: "4", base: "4" }}
                      >
                        {item.name}
                      </Text>
                      <Grid
                        m={{ lg: "auto", sm: "left", base: "right" }}
                        templateColumns={{
                          base: "repeat(1,1fr)",
                          sm: "repeat(2,1fr)",
                          md: "repeat(2,1fr)",
                          lg: "repeat(2,1fr)",
                          xl: "repeat(2,1fr)"
                        }}
                        gap="4"
                        justify="space-between"
                        mb="2"
                      >
                        <Button
                          colorScheme="red"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDelete(item.productId, item.variantId)}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </Grid>

                    <Grid
                      m="auto"
                      templateColumns={{
                        base: "repeat(1,1fr)",
                        sm: "40% 50%",
                        md: "30% 60%",
                        lg: "30% 60%",
                        xl: "20% 60%"
                      }}
                      align="center"
                      mb="1"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        boxSize="180px"
                        m="auto"
                      />

                      <Box
                        ml="4"
                        textAlign={{
                          lg: "left",
                          md: "left",
                          sm: "left",
                          base: "center"
                        }}
                      >
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          textTransform="capitalize"
                        >
                          {item.name}
                        </Text>
                        <Text fontSize="lg" fontWeight="bold">
                          Price : NPR {item.price}.00 /-
                        </Text>
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          color={color}
                          textTransform="capitalize"
                        >
                          {item.frameType}
                        </Text>
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          color={color}
                          textTransform="capitalize"
                        >
                          Colour : {item.frameColor}
                        </Text>{" "}
                        <Text
                          fontSize="md"
                          fontWeight="600"
                          color={color}
                          textTransform="capitalize"
                        >
                          Style : {item.frameStyle}
                        </Text>
                      </Box>
                    </Grid>
                  </Box>
                ))}
            </Grid>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Wishlist;

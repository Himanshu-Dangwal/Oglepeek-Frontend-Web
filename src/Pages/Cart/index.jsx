import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import CartLength from "./CartLength";
import CartItem from "./CartItem";
import PriceDetail from "./priceDetail";
import SaleBox from "./SaleBox";
import CartEmpty from "./CartEmpty";
import CouponBox from "./CouponBox";
import Footer from "../../Components/Footer/Footer";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Material } from "../Product/FilterDetails";


const CartPage = () => {
  const { cart } = useSelector((state) => state.CartReducer);
  const [detailedCartItems, setDetailedCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const promises = cart.map(async ({ productId, variantId, quantity }) => {
          const { data: product } = await axios.get(`http://localhost:8000/api/product/${productId}`);
          const variant = product.variants.find(v => v._id === variantId);
          return {
            productId,
            variantId,
            quantity,
            name: product.name,
            price: variant.price,
            image: variant.images[0],
            frameStyle: product.frameStyle,
            frameColor: variant.frameColor,
            description: product.description,
            material: product.material,
            lens: product.lens,
            frameType: product.frameType,
          };
        });

        const results = await Promise.all(promises);
        setDetailedCartItems(results);
      } catch (err) {
        console.error("Failed to load cart details:", err);
      }
    };

    if (cart.length > 0) fetchCartDetails();
    else setDetailedCartItems([]);
  }, [cart]);

  const getTotalPrice = () =>
    detailedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <Flex
          width={"90%"}
          margin="auto"
          border={"0px solid red"}
          marginTop={"20px"}
          marginBottom="20px"
          gap={16}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row"
          }}
        >
          <Flex
            flexDirection={"column"}
            gap="5"
            border={"0px solid black"}
            width={{
              base: "95%",
              sm: "95%",
              md: "95%",
              lg: "60%",
              xl: "65%",
              "2xl": "65%"
            }}
          >
            <CartLength cartLength={cart.length} />
            <CartItem detailedItems={detailedCartItems} />
          </Flex>
          <Flex
            flexDirection={"column"}
            border={"0px solid blue"}
            width={{
              base: "95%",
              sm: "95%",
              md: "95%",
              lg: "35%",
              xl: "27%",
              "2xl": "27%"
            }}
            gap={"5"}
          >
            <Text
              fontSize="20px"
              fontFamily="sans-serif"
              border={"0px solid red"}
              fontWeight={500}
            >
              Bill Details
            </Text>
            <PriceDetail
              totalPrice={getTotalPrice()}
              discountPrice={0}
            />
            <SaleBox />

            <CouponBox />
            <Button
              backgroundColor={"#12daac"}
              color="#091e52"
              borderRadius={"20px"}
              padding="16px 24px 16px 24px"
              fontSize={"16px"}
              height="56px"
              fontWeight={"700"}
              onClick={() => navigate("/shipping")}
            >
              Proceed To Checkout
            </Button>
          </Flex>
        </Flex>
      ) : (
        <CartEmpty />
      )}
      <Footer />
    </>
  );
};

export default CartPage;

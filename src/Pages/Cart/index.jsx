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
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
// import axios from "axios";


const CartPage = () => {
  // const { cart } = useSelector((state) => state.CartReducer);
  // const [detailedCartItems, setDetailedCartItems] = useState([]);
  const { Authdata } = useContext(AuthContext);
  const peekCoins = Authdata.peekCoins || 0;


  const navigate = useNavigate();
  const detailedCartItems = useSelector((state) => state.CartReducer.cart);


  // useEffect(() => {
  //   const fetchCartDetails = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:8000/api/cart", {
  //         withCredentials: true,
  //       });

  //       if (data.success) {
  //         setDetailedCartItems(data.items);
  //         setPeekCoins(data.peekCoins || 0); // 👈 Save peekCoins
  //       }
  //     } catch (err) {
  //       console.error("Failed to load cart details:", err);
  //     }
  //   };

  //   fetchCartDetails();
  // }, []);


  const getTotalPrice = () =>
    detailedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      {detailedCartItems.length > 0 ? (
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
            <CartLength cartLength={detailedCartItems.length} />
            <CartItem />
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
              discountPrice={getTotalPrice()}
              peekCoins={peekCoins}
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

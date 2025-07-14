import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";
import axios from "axios";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({ card: "", date: "", cvv: "", name: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const { orderId } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardPayment = async () => {
    const { card, date, cvv, name } = cardDetails;
    if (card.length !== 16 || !date.includes("/") || cvv.length !== 3 || name === "") {
      setError("Please enter valid card details");
      return;
    }
    try {
      let HOST = process.env.REACT_APP_HOST;
      await axios.post(`${HOST}/api/payment/card`, { orderId });
      toast({ title: "Payment Successful", status: "success", duration: 3000 });
      navigate("/confirm");
    } catch (err) {
      toast({ title: "Payment Failed", status: "error", duration: 3000 });
    }
  };

  const handleEsewaRedirect = async () => {
    try {
      let HOST = process.env.REACT_APP_HOST;

      const response = await axios.post(`${HOST}/api/payment/pay/esewa/${orderId}`, {}, {
        withCredentials: true,
        responseType: "text", // Ensure we treat it as HTML, not JSON
      });

      // Inject HTML returned from server (eSewa form)
      const html = response.data;
      console.log("eSewa HTML response:", html);

      const newWindow = window.open("", "_self");
      if (newWindow) {
        newWindow.document.open();
        newWindow.document.write(html);
        newWindow.document.close();
      }
    } catch (err) {
      toast({
        title: "Failed to initiate eSewa payment.",
        description: "Please try again later.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      console.error("eSewa initiation error:", err);
    }
  };


  return (
    <>
      <Navbar />
      <Box w={{ base: "95%", md: "80%", xl: "60%" }} m="auto" py={10}>
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Choose Payment Method
        </Text>
        <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
          <Stack spacing={5} direction="column">
            <Radio value="card">Pay with Card</Radio>
            <Radio value="esewa">Pay with eSewa</Radio>
          </Stack>
        </RadioGroup>

        {paymentMethod === "card" && (
          <Box mt={6}>
            <Input
              name="card"
              placeholder="Card Number"
              maxLength={16}
              mb={3}
              onChange={handleInputChange}
            />
            <Input
              name="date"
              placeholder="MM/YY"
              mb={3}
              onChange={handleInputChange}
            />
            <Input
              name="cvv"
              placeholder="CVV"
              maxLength={3}
              mb={3}
              onChange={handleInputChange}
            />
            <Input
              name="name"
              placeholder="Cardholder Name"
              mb={3}
              onChange={handleInputChange}
            />
            {error && <Text color="red.500">{error}</Text>}
            <Button colorScheme="teal" mt={4} onClick={handleCardPayment}>
              Pay Now
            </Button>
          </Box>
        )}

        {paymentMethod === "esewa" && (
          <Box mt={6}>
            <Text mb={4}>You will be redirected to eSewa to complete your payment.</Text>
            <Button colorScheme="green" onClick={handleEsewaRedirect}>
              Pay with eSewa
            </Button>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Payment;

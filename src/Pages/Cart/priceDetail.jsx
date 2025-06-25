import { Box, Flex, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function PriceDetail({ totalPrice, discountPrice, peekCoins = 0 }) {
  const { coupon } = useSelector((state) => state.CartReducer);

  const tax = Math.round(discountPrice * 0.10);
  const maxRedeemAmount = discountPrice * 0.10; // 10% of cart total
  const peekCoinValue = 0.025;
  const peekCoinRedeemAmount = Math.min(peekCoins * peekCoinValue, maxRedeemAmount);
  const peekCoinsUsed = Math.floor(peekCoinRedeemAmount / peekCoinValue); // Actual coins used

  const totalPayable = discountPrice + tax - (coupon || 0) - peekCoinRedeemAmount;

  return (
    <Flex
      flexDirection={"column"}
      boxShadow="xl"
      border="1px solid grey"
      borderRadius={"10px"}
      gap="3"
      padding={"5px"}
      cursor={"pointer"}
    >
      <Flex flexDirection="column" padding={"10px"} gap="3">
        {/* Total Price */}
        <Row label="Total Price" value={`NPR ${totalPrice}`} />

        {/* Discount */}
        <Row label="Total Discount" value={`${totalPrice - discountPrice}`} />

        {/* Subtotal */}
        <Row label="Total (Before Tax)" value={`${discountPrice}`} />

        {/* Tax */}
        <Row label="Tax Collected (10%)" value={`${tax}`} />

        {/* PeekCoins */}
        <Row label={`PeekCoins Redeemed (${peekCoinsUsed})`} value={`${peekCoinRedeemAmount.toFixed(2)}`} />

        {/* Coupon */}
        <Row label="Coupon" value={`${coupon || 0}`} />

        {/* Convenience Fee */}
        <Row label="Convenience Fee" value="Free" color="#0FBD95" />

        {/* Total Payable */}
        <Row label="Total Payable" value={`NPR ${totalPayable.toFixed(2)}`} bold />

      </Flex>
    </Flex>
  );
}

// Reusable Row Component
const Row = ({ label, value, bold, color }) => (
  <>
    <Flex justifyContent="space-between">
      <Heading
        as="p"
        fontSize="16px"
        fontWeight={bold ? "600" : "500"}
        fontFamily="Inter"
      >
        {label}
      </Heading>
      <Heading
        as="p"
        fontSize="15px"
        fontWeight={bold ? "600" : "500"}
        fontFamily="Inter"
        justifyContent="flex-end"
        color={color}
      >
        {value}
      </Heading>
    </Flex>
    <Box border={"1px dashed #CECEDF"} />
  </>
);


export default PriceDetail;

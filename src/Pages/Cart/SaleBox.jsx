import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const SaleBox = () => {
  return (
    <Flex
      backgroundColor={"#FFF3C7"}
      padding="20px"
      border={"1px solid grey"}
      borderRadius="10px"
      boxShadow={"lg"}
      justifyContent="space-between"
      cursor={"pointer"}
    >
      <Flex flexDirection={"column"}>
        <Heading as={"h1"} fontSize="15px" fontWeight={700} color={"#333368"}>
          THE OPENING SALE
        </Heading>
        <Text fontSize={"14px"} color="#333368">
          Extra Offer. Use coupon: HIMU30, NANCY15
        </Text>
      </Flex>
      <AiOutlineInfoCircle size={"20"} />
    </Flex>
  );
};

export default SaleBox;

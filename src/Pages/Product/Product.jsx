import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Pagination from "../../Components/Pagination";
import ProductCard from "./ProductCard";
import ProdFilter from "./ProdFilter";
import ProdFrame from "./ProdFrame";
import { TbArrowsUpDown } from "react-icons/tb";
import {
  Box, Flex, Select, Switch, Text, IconButton, Drawer, DrawerOverlay,
  DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, HStack
} from "@chakra-ui/react";
import {
  Gender,
  ProductTypes,
  FrameColor,
  Frame1,
  Frame2,
  Lens,
  Material
} from "./FilterDetails";
import { FiFilter } from "react-icons/fi";

// const API_BASE_URL = import.meta.env.VITE_LOCAL_URL;

const NewProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productType, setProductType] = useState("");
  const [frameType, setFrameType] = useState("");
  const [frameStyle, setFrameStyle] = useState("");
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("");
  const [gender, setGender] = useState("");
  const [frameColor, setFrameColor] = useState("");
  const [lens, setLens] = useState("");
  const [material, setMaterial] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchproduct = async () => {
      setIsLoaded(true);
      try {
        const response = await fetch(
          `http://localhost:8000/api/product?sort=${sort}&frameStyle=${frameStyle}&productType=${productType}&frameType=${frameType}&frameColor=${frameColor}&gender=${gender}&page=${page}&material=${material}&lens=${lens}`,
        );
        const postData = await response.json();
        setProducts(postData);
        setIsLoaded(false);
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    };

    fetchproduct();
  }, [page, sort, gender, productType, frameColor, frameType, frameStyle, lens, material]);


  const handleClickFrameStyle = (value) => setFrameStyle(value);
  const handleClickFrameType = (value) => setFrameType(value);

  return (
    <>
      <Navbar />
      <Box>
        {/* Mobile filter icon with text */}
        <Box display={{ base: "block", xl: "none" }} textAlign="right" p={4}>
          <HStack justifyContent="flex-end">
            <Text fontSize="md" fontWeight="medium">Filters</Text>
            <IconButton icon={<FiFilter />} onClick={onOpen} aria-label="Open filters" />
          </HStack>
        </Box>

        <Flex m="0" px="2%" gap="4" cursor="pointer">
          {/* Sidebar filters - hidden on mobile */}
          <Flex
            w="17%"
            m={0}
            display={{ base: "none", xl: "flex" }}
            flexDirection="column"
          >
            <ProdFrame heading={"FRAME TYPE"} type={Frame1} filter={handleClickFrameType} />
            <ProdFrame heading={"FRAME STYLE"} type={Frame2} filter={handleClickFrameStyle} />
            <ProdFilter
              genderOptions={Gender}
              genderValue={gender}
              onGenderChange={setGender}
              productTypeOptions={ProductTypes}
              productTypeValue={productType}
              onProductTypeChange={setProductType}
              frameColorOptions={FrameColor}
              frameColorValue={frameColor}
              onFrameColorChange={setFrameColor}
              lensOptions={Lens}
              lensValue={lens}
              onLensChange={setLens}
              materialOptions={Material}
              materialValue={material}
              onMaterialChange={setMaterial}
            />
            <hr />
          </Flex>

          {/* Main content area */}
          <Box
            overflow="scroll"
            w={{ xl: "82%", base: "100%" }}
            borderLeft={{ xl: "1px solid", base: "none" }}
            borderColor="gray.300"
            m={0}
          >
            <Flex justifyContent="space-between" alignItems="center" p="7px" bg="#e2e8f0">
              <Text fontSize="15px" color="gray.600" fontWeight="500">
                EYEGLASSES & SUNGLASSES
              </Text>
              <Flex alignItems="center" display={{ md: "inherit", base: "none" }}>
                <Text fontWeight="bold" mr="5px" color="green" fontSize="15px">
                  VIEW FRAMES
                </Text>
                <Switch colorScheme="green" isChecked size="lg" />
                <Text ml="5px" fontSize="15px">VIEW 3D TRY ON (Coming Soon)</Text>
              </Flex>
              <Flex>
                <Flex alignItems="center">
                  <TbArrowsUpDown color="green" fontWeight="bold" />
                  <Text fontWeight="bold" color="green" fontSize="15px">SortBy</Text>
                </Flex>
                <Select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  border="0.1px"
                  borderRadius="3px"
                  borderColor="black"
                  ml="4px"
                  p="0px"
                  fontSize="16px"
                  bg="whiteAlpha.900"
                >
                  <option value="">Select</option>
                  <option value="lowtohigh">Price : low to high</option>
                  <option value="hightolow">Price : high to low</option>
                </Select>
              </Flex>
            </Flex>

            {products.length !== 0 && (
              <Text mt="5px" textAlign="center" fontSize="15px">
                Showing {products.length} of 50 Results
              </Text>
            )}

            {isLoaded ? (
              <Loading />
            ) : products.length !== 0 ? (
              <ProductCard type={products} />
            ) : (
              <Text
                fontSize="28px"
                fontWeight="bolder"
                textAlign="center"
                color="gray"
                mt="5"
              >
                No Glasses Found
              </Text>
            )}
          </Box>
        </Flex>

        <Pagination current={page} onChange={(value) => setPage(value)} />

        {/* Drawer for mobile filters */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filters</DrawerHeader>
            <DrawerBody>
              <ProdFrame heading={"FRAME TYPE"} type={Frame1} filter={handleClickFrameType} />
              <ProdFrame heading={"FRAME STYLE"} type={Frame2} filter={handleClickFrameStyle} />
              <ProdFilter
                genderOptions={Gender}
                genderValue={gender}
                onGenderChange={setGender}
                productTypeOptions={ProductTypes}
                productTypeValue={productType}
                onProductTypeChange={setProductType}
                frameColorOptions={FrameColor}
                frameColorValue={frameColor}
                onFrameColorChange={setFrameColor}
                lensOptions={Lens}
                lensValue={lens}
                onLensChange={setLens}
                materialOptions={Material}
                materialValue={material}
                onMaterialChange={setMaterial}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Footer />
    </>
  );
};

export default NewProduct;

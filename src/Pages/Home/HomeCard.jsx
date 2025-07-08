import React from "react";
import { Box, Grid, Text, Image, Center, useColorModeValue } from "@chakra-ui/react";
const { useNavigate } = require("react-router-dom");

const HomeCard = ({ type }) => {
    const navigate = useNavigate();
    const bg = useColorModeValue("#f5f5f5", "gray.700");
    const cardBg = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textColor = useColorModeValue("gray.700", "gray.100");

    return (
        <Box mb="2" cursor="pointer" bg={bg} p="4" w="100%">
            <Grid
                templateColumns={{
                    base: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                    lg: "repeat(4,1fr)",
                    xl: "repeat(6,1fr)",
                    "2xl": "repeat(6,1fr)"
                }}
                gap={6}
                w="99%"
                m="auto"
            >
                {type.map((i) => (
                    <Box
                        key={i.id}
                        border="1px"
                        borderColor={borderColor}
                        flexDirection="column"
                        borderRadius="md"
                        bg={cardBg}
                        p="1"
                        pb="2.5"
                        onClick={() => navigate('/products')}
                        _hover={{ boxShadow: "lg", cursor: "pointer" }}
                    >
                        <Center>
                            <Image src={i.img} alt={i.name} w="100%" border="1px" borderColor={borderColor} borderRadius="md" />
                        </Center>
                        <Center>
                            <Text color={textColor} fontSize="16px" fontWeight="500" p="1">
                                {i.title}
                            </Text>
                        </Center>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default HomeCard;

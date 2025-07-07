import React, { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    // useToken,
    useColorModeValue
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionMenuList = motion(MenuList);

const HoverMenu = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const borderColor = useToken("colors", "teal.500");

    // Dark mode responsive values
    const menuBg = useColorModeValue("whiteAlpha.900", "gray.800");
    const menuShadow = useColorModeValue("lg", "dark-lg");
    const hoverTextColor = useColorModeValue("teal.500", "teal.300");
    const hoverBorderColor = useColorModeValue("teal.500", "teal.300");

    return (
        <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <Menu isOpen={isOpen}>
                <MenuButton
                    fontSize="15px"
                    fontWeight="600"
                    bg="transparent"
                    borderBottom="2px solid transparent"
                    transition="all 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
                    _hover={{
                        borderBottom: `2px solid ${hoverBorderColor}`,
                        color: hoverTextColor
                    }}
                >
                    {label}
                </MenuButton>

                <AnimatePresence>
                    {isOpen && (
                        <MotionMenuList
                            key="menu"
                            initial={{ opacity: 0, y: -20, scale: 0.97 }}
                            animate={{ opacity: 0.9, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{
                                duration: 0.25,
                                ease: [0.23, 1, 0.32, 1]
                            }}
                            bg={menuBg}
                            backdropFilter="blur(10px)"
                            boxShadow={menuShadow}
                            p="5"
                            w="100%"
                            zIndex={20}
                            borderRadius="lg"
                            style={{
                                transformOrigin: "top center"
                            }}
                        >
                            {children}
                        </MotionMenuList>
                    )}
                </AnimatePresence>
            </Menu>
        </div>
    );
};

export default HoverMenu;

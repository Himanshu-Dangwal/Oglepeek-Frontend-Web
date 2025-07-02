// import React, { useState } from "react";
// import { Menu, MenuButton, MenuList } from "@chakra-ui/react";

// const HoverMenu = ({ label, children }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div
//             onMouseEnter={() => setIsOpen(true)}
//             onMouseLeave={() => setIsOpen(false)}
//         >
//             <Menu isOpen={isOpen}>
//                 <MenuButton
//                     bg="#fbf9f7"
//                     fontSize="15px"
//                     fontWeight="600"
//                     _hover={{ borderBottom: "4px solid teal" }}
//                 >
//                     {label}
//                 </MenuButton>
//                 <MenuList
//                     color="blackAlpha.900"
//                     h="auto"
//                     maxH="500px"
//                     overflowY="auto"
//                     bg="whiteAlpha.800"
//                     w="100%"
//                     p="5"
//                 >
//                     {children}
//                 </MenuList>
//             </Menu>
//         </div>
//     );
// };

// export default HoverMenu;

// src/components/HoverMenu.js
import React, { useState } from "react";
import { Menu, MenuButton, MenuList, useToken } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionMenuList = motion(MenuList);

const HoverMenu = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const borderColor = useToken("colors", "teal.500");

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
                        borderBottom: `2px solid ${borderColor}`,
                        color: "teal.500"
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
                            bg="whiteAlpha.900"
                            backdropFilter="blur(10px)"
                            boxShadow="lg"
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


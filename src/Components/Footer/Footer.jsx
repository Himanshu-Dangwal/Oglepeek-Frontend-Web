import React from 'react';
import {
  Box, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  Heading, Stack, Link, Input, Button, HStack, Icon
} from '@chakra-ui/react';
import { FaInstagram, FaYoutube, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" color="gray.300" py={10} px={{ base: 4, md: 8 }}>
      {/* Desktop view: four columns */}
      <Box display={{ base: 'none', md: 'block' }}>
        <SimpleGrid columns={4} spacing={8} alignItems="start">
          {/* Customer Service column */}
          <Box>
            <Heading as="h4" size="sm" mb={4} color="gray.100" textTransform="uppercase">
              Customer Service
            </Heading>
            <Stack as="ul" spacing={2} listStyleType="none">
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Contact Us</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Shipping</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Returns</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Warranty</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>FAQ</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Terms &amp; Conditions</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Privacy Policy</Link>
            </Stack>
          </Box>
          {/* About Us column */}
          <Box>
            <Heading as="h4" size="sm" mb={4} color="gray.100" textTransform="uppercase">
              About Us
            </Heading>
            <Stack as="ul" spacing={2} listStyleType="none">
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Our Story</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Find a Store</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Corporate Gifts</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Accessibility</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Take 3 For The Sea</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Student Discount</Link>
            </Stack>
          </Box>
          {/* Shop column */}
          <Box>
            <Heading as="h4" size="sm" mb={4} color="gray.100" textTransform="uppercase">
              Shop
            </Heading>
            <Stack as="ul" spacing={2} listStyleType="none">
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>E-Gift Cards</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Women&#39;s Sunglasses</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Men&#39;s Sunglasses</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Unisex Sunglasses</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>New Arrivals</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Best Sellers</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Sale</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.100' }}>Virtual Try-On</Link>
            </Stack>
          </Box>
          {/* Newsletter column */}
          <Box>
            <Heading as="h4" size="sm" mb={4} color="gray.100" textTransform="uppercase">
              Newsletter
            </Heading>
            <Stack spacing={3} mb={4}>
              <Input placeholder="Enter your email" type="email" variant="filled" size="md" _placeholder={{ color: 'gray.500' }} />
              <Button colorScheme="blue" size="md">Sign Up</Button>
            </Stack>
            <HStack spacing={4}>
              <Link href="https://instagram.com/oglepeek" isExternal aria-label="Oglepeek Instagram">
                <Icon as={FaInstagram} boxSize={6} _hover={{ color: 'gray.100' }} />
              </Link>
              <Link href="https://youtube.com/oglepeek" isExternal aria-label="Oglepeek YouTube">
                <Icon as={FaYoutube} boxSize={6} _hover={{ color: 'gray.100' }} />
              </Link>
              <Link href="https://facebook.com/oglepeek" isExternal aria-label="Oglepeek Facebook">
                <Icon as={FaFacebook} boxSize={6} _hover={{ color: 'gray.100' }} />
              </Link>
              <Link href="mailto:oglepeek123@gmail.com" isExternal aria-label="Oglepeek Email">
                <Icon as={FaEnvelope} boxSize={6} _hover={{ color: 'gray.100' }} />
              </Link>
            </HStack>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Mobile view: accordions for first three sections, newsletter always visible */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Accordion allowMultiple defaultIndex={[]} borderColor="transparent">
          {/* Customer Service accordion */}
          <AccordionItem>
            <h2>
              <AccordionButton px={0} py={3}>
                <Box flex="1" textAlign="left" fontWeight="semibold" textTransform="uppercase">
                  Customer Service
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Stack as="ul" spacing={2} listStyleType="none" pl={2}>
                <Link href="#">Contact Us</Link>
                <Link href="#">Shipping</Link>
                <Link href="#">Returns</Link>
                <Link href="#">Warranty</Link>
                <Link href="#">FAQ</Link>
                <Link href="#">Terms &amp; Conditions</Link>
                <Link href="#">Privacy Policy</Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          {/* About Us accordion */}
          <AccordionItem>
            <h2>
              <AccordionButton px={0} py={3}>
                <Box flex="1" textAlign="left" fontWeight="semibold" textTransform="uppercase">
                  About Us
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Stack as="ul" spacing={2} listStyleType="none" pl={2}>
                <Link href="#">Our Story</Link>
                <Link href="#">Find a Store</Link>
                <Link href="#">Corporate Gifts</Link>
                <Link href="#">Accessibility</Link>
                <Link href="#">Take 3 For The Sea</Link>
                <Link href="#">Student Discount</Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          {/* Shop accordion */}
          <AccordionItem>
            <h2>
              <AccordionButton px={0} py={3}>
                <Box flex="1" textAlign="left" fontWeight="semibold" textTransform="uppercase">
                  Shop
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              <Stack as="ul" spacing={2} listStyleType="none" pl={2}>
                <Link href="#">E-Gift Cards</Link>
                <Link href="#">Women&#39;s Sunglasses</Link>
                <Link href="#">Men&#39;s Sunglasses</Link>
                <Link href="#">Unisex Sunglasses</Link>
                <Link href="#">New Arrivals</Link>
                <Link href="#">Best Sellers</Link>
                <Link href="#">Sale</Link>
                <Link href="#">Virtual Try-On</Link>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* Newsletter (always visible on mobile) */}
        <Box mt={6}>
          <Heading as="h4" size="sm" mb={4} color="gray.100" textTransform="uppercase">
            Newsletter
          </Heading>
          <Stack spacing={3} mb={4}>
            <Input placeholder="Enter your email" type="email" variant="filled" size="md" _placeholder={{ color: 'gray.500' }} />
            <Button colorScheme="blue" size="md">Sign Up</Button>
          </Stack>
          <HStack spacing={4}>
            <Link href="https://instagram.com/oglepeek" isExternal aria-label="Oglepeek Instagram">
              <Icon as={FaInstagram} boxSize={5} _hover={{ color: 'gray.100' }} />
            </Link>
            <Link href="https://youtube.com/oglepeek" isExternal aria-label="Oglepeek YouTube">
              <Icon as={FaYoutube} boxSize={5} _hover={{ color: 'gray.100' }} />
            </Link>
            <Link href="https://facebook.com/oglepeek" isExternal aria-label="Facebook">
              <Icon as={FaFacebook} boxSize={5} _hover={{ color: 'gray.100' }} />
            </Link>
            <Link href="mailto:oglepeek123@gmail.com" isExternal aria-label="Email">
              <Icon as={FaEnvelope} boxSize={5} _hover={{ color: 'gray.100' }} />
            </Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Image,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Stack,
  HStack,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import lemon_logo from "../assets/little-lemon.png";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("white", "gray.800");

  const navLinks = (
    <VStack align="start" spacing={4}>
      <Button as={RouterLink} to="/" variant="ghost" onClick={onClose}>
        Home
      </Button>
      <Button as={RouterLink} to="/menu" variant="ghost" onClick={onClose}>
        Menu
      </Button>
      <Button as={RouterLink} to="/contact" variant="ghost" onClick={onClose}>
        Contact
      </Button>
      <Button as={RouterLink} to="/booking" variant="ghost" onClick={onClose}>
        Booking
      </Button>
    </VStack>
  );

  return (
    <Box position="sticky" top="0" zIndex="1000" bg={bg} boxShadow="xs" px={4} py={3}>
      <Flex align="center" justify="space-between">
        {/* Logo */}
        <RouterLink to="/">
          <Flex align="center">
            <Image src={lemon_logo} alt="Logo" boxSize="40px" mr={3} />
          </Flex>
        </RouterLink>

        {/* Desktop Navigation */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button as={RouterLink} to="/" variant="ghost">
            Home
          </Button>
          <Button as={RouterLink} to="/menu" variant="ghost">
            Menu
          </Button>
          <Button as={RouterLink} to="/contact" variant="ghost">
            Contact
          </Button>
          <Button as={RouterLink} to="/booking" variant="ghost">
            Booking
          </Button>
        </HStack>

        {/* Right-side icons */}
        <HStack spacing={2}>
          {/* Color Mode Toggle */}
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />

          {/* Hamburger Menu (Mobile) */}
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      {/* Drawer for Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>{navLinks}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;

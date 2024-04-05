import {
  Container,
  Box,
  Avatar,
  Button,
  HStack,
  VStack,
  Image,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link,
  MenuDivider,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

const IconButton = ({ children }) => {
  return (
    <Button
      padding="0.4rem"
      width="auto"
      height="auto"
      borderRadius="100%"
      bg="transparent"
      _hover={{ bg: "#f6f6f6" }}
    >
      {children}
    </Button>
  );
};

const Navbar = () => {
  return (
    <Box
      py="2"
      boxShadow="sm"
      borderBottom="2px solid #301287"
      top="0"
      bg={useColorModeValue("#10062D", "gray.700")}
      width="100%"
    >
      <Container maxW="1280px" px={4} mx="auto">
        <HStack spacing={4}>
          <Flex w={"10%"}>
            <Image
              alt="dev logo"
              w={"auto"}
              h={12}
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            />
          </Flex>
          <Flex w={"90%"} justify={"space-between"}>
            {" "}
            <Input
              maxW="20rem"
              left={10}
              placeholder="Search..."
              borderColor={useColorModeValue("#301287", "white")}
              borderRadius="10px"
              d={{ base: "none", md: "block" }}
              color="white"
            />
            <Spacer />
            <HStack spacing={3}>
              <IconButton bg="#3b49df">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="ap1tc5wqdskeg9i5jtulggx2n8axe0vz"
                >
                  <title id="ap1tc5wqdskeg9i5jtulggx2n8axe0vz">
                    Notifications
                  </title>
                  <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                </svg>
              </IconButton>
              <Button
                as={NextLink}
                color="#fff"
                rounded="md"
                bg="#3b49df"
                _hover={{ bg: "#323ebe" }}
                href="/dashboard"
              >
                Dashboard
              </Button>
              <Button
                as={NextLink}
                color="#fff"
                rounded="md"
                bg="#3b49df"
                _hover={{ bg: "#323ebe" }}
                href="/login"
              >
                Login
              </Button>

              <Menu isLazy>
                <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
                  <Avatar
                    size="sm"
                    src={
                      "https://avatars2.githubusercontent.com/u/37842853?v=4"
                    }
                  />
                </MenuButton>
                <MenuList
                  zIndex={5}
                  border="2px solid"
                  borderColor={useColorModeValue("gray.700", "gray.100")}
                  boxShadow="4px 4px 0"
                >
                  <Link
                    href="https://dev.to/m_ahmad"
                    _hover={{ textDecoration: "none" }}
                    isExternal
                  >
                    <MenuItem>
                      <VStack justifyContent="start" alignItems="left">
                        <Text fontWeight="500">Muhammad Ahmad</Text>
                        <Text size="sm" color="gray.500" mt="0 !important">
                          @m_ahmad
                        </Text>
                      </VStack>
                    </MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Dashboard</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Create Post</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Reading List</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Settings</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Sign Out</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;

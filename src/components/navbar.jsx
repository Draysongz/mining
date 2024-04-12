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
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import CModal from "./Dashboard/createModal";

export default function Navbar({ startMining }) {
  // Define state to store user data
  const [user, setUser] = useState(null);
  async function fetchUser(userId) {
    try {
      // Make a GET request to the user API route with the user ID as a query parameter
      const response = await axios.get(`/api/user?userId=${userId}`);

      // Return the user data from the response
      return response.data;
    } catch (error) {
      // Handle any errors
      console.error("Error fetching user:", error.message);
      return null; // Return null if an error occurs
    }
  }

  useEffect(() => {
    const userId = Cookies.get("userId");

    if (userId) {
      fetchUser(userId).then((user) => {
        if (user) {
          // User data is available
          console.log("User details:", user);
          setUser(user);
        } else {
          // User not found or error occurred
          console.log("User not found or error occurred.");
        }
      });
    }
  }, []);

  return (
    <Box
      py="2"
      boxShadow="sm"
      borderBottom="2px solid #301287"
      top="0"
      left={0}
      right={0}
      bg={useColorModeValue("#10062D", "gray.700")}
      width="100%"
    >
      <Container px={4} mx="auto">
        <HStack spacing={4}>
          <Flex w={"10%"}>
            {/* <Image
              alt="dev logo"
              w={"auto"}
              h={12}
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            /> */}
          </Flex>
          <Flex w={"90%"} justify={"space-between"}>
            {" "}
            <InputGroup>
              <InputLeftElement>
                <FaSearch />
              </InputLeftElement>
              <Input
                maxW={{ base: "10rem", sm: "15rem", md: "20rem" }}
                placeholder="Search..."
                borderColor={useColorModeValue("#301287", "white")}
                borderRadius="10px"
                d={{ base: "none", md: "block" }}
                color="white"
              />
            </InputGroup>
            <Spacer />
            <HStack spacing={5}>
              <>
                <CModal user={user} startMining={startMining} />
              </>
              {/* <Button
                as={NextLink}
                color="#fff"
                rounded="md"
                bg="#3b49df"
                _hover={{ bg: "#323ebe" }}
                href="/login"
                leftIcon={<FaBriefcase />}
              >
                Login
              </Button> */}

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
                    <Text fontWeight="500" as={NextLink} href="/dashboard">
                      Dashboard
                    </Text>
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
}

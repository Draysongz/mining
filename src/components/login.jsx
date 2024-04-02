import React, { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
// import spiralImg from "../images/Vector.png";

export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Box
        bgImage="url('../images/Vector.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        zIndex={-1}
      >
        This box does should have an image
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#10062D"}>
          <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={10} px={6}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("#10062D", "gray.700")}
              p={8}
              border="2px solid #301287"
              boxShadow="0 0 10px 5px rgba(48, 18, 135, 0.5)"
              minW={{ sm: "md", md: "lg" }}
              minH={{ sm: "md", md: "lg" }}
            >
              <Stack spacing={10}>
                {" "}
                <Heading size={"h5"} textAlign="center" color={"#501EE1"} p={5}>
                  Login
                </Heading>
                <FormControl id="email">
                  <Input
                    type="email"
                    size={"lg"}
                    placeholder="Username or E-mail"
                    _placeholder={{ color: "#C5C0C0" }}
                    color={"white"}
                    border="2px solid #301287"
                  />
                </FormControl>
                <FormControl id="password">
                  <InputGroup
                    size={"lg"}
                    border="2px solid #301287"
                    rounded={"md"}
                  >
                    {" "}
                    <Input
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      _placeholder={{ color: "#C5C0C0" }}
                      color={"white"}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} align="center">
                  <Button
                    bg={"#301287"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    size={"lg"}
                    width={"200px"}
                  >
                    Login
                  </Button>{" "}
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"center"}
                    spacing={10}
                  >
                    <Text color={"white"}>Don't have an account?</Text>
                    <Link as={NextLink} href="/signup" color={"#501EE1"}>
                      Signup
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

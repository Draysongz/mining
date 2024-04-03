"use client";
import NextLink from "next/link";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import spiralImg from "../images/Vector.png";
import Image from "next/image";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box bg={"#10062D"} position="relative">
      <Image
        src={spiralImg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />{" "}
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"2xl"}
          py={12}
          px={6}
          pos={"absolute"}
        >
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
              <Heading fontSize={"4xl"} textAlign={"center"} color={"#501EE1"}>
                Sign up
              </Heading>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired color={"white"}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="First Name"
                      _placeholder={{ color: "#C5C0C0" }}
                      border="2px solid #301287"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" color={"white"}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="First Name"
                      _placeholder={{ color: "#C5C0C0" }}
                      border="2px solid #301287"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired color={"white"}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="First Name"
                  _placeholder={{ color: "#C5C0C0" }}
                  border="2px solid #301287"
                />
              </FormControl>
              <FormControl id="password" isRequired color={"white"}>
                <FormLabel>Password</FormLabel>
                <InputGroup
                  size={"lg"}
                  border="2px solid #301287"
                  rounded={"md"}
                >
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    _placeholder={{ color: "#C5C0C0" }}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"#301287"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"} color="white">
                  Already a user?{" "}
                  <Link as={NextLink} href="/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

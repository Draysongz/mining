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
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import spiralImg from "../images/Vector.png";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/login", {
        email,
        password,
      });
      const user = response.data
      console.log(user);
      toast.success("Login successful");
      router.push('/dashboard', { user });
    } catch (error) {
      const errorMessage = error.response.data;
      toast.error(errorMessage);
      console.log(error.response.data);
    }
  };
  return (
    <>
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
        />
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack
            spacing={8}
            mx={"auto"}
            maxW={"2xl"}
            py={10}
            px={6}
            position="absolute"
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
                <Heading size={"h5"} textAlign="center" color={"#501EE1"} p={5}>
                  Login
                </Heading>
                <FormControl id="email">
                  <Input
                    type="email"
                    size={"lg"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      _placeholder={{ color: "#C5C0C0" }}
                      color={"white"}
                    />
                    <InputRightElement width="4.5rem">
                      <IconButton
                        variant={"ghost"}
                        h="1.75rem"
                        size="sm"
                        onClick={handleClick}
                        icon={show ? <ViewOffIcon /> : <ViewIcon />}
                      />
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
                    onClick={login}
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

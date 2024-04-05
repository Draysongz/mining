"use client";
import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Button,
  Flex,
  Card,
  CardFooter,
  Stack,
  Spacer,
  Image,
} from "@chakra-ui/react";
import nft1 from "../../images/Nft1.png";
import nft2 from "../../images/Nft2.png";
import nft3 from "../../images/Nft3.png";
import NextImage from "next/image";

// Array of card data
// const cardData = [
//   { image: { nft1 }, text: "#3542" },
//   { image: { nft2 }, text: "#3542" },
//   { image: { nft3 }, text: "#3542" },
//   { image: { nft1 }, text: "#3542" },
//   { image: { nft2 }, text: "#3542" },
//   { image: { nft3 }, text: "#3542" },
// ];

const CardComponent = () => {
  return (
    <>
      <Flex direction={"column"} p={5} bg={"#10062D"}>
        <Flex p={5}>
          <Button width={"100px"} size={"sm"}>
            Filter
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing={4}>
          <Card border="2px solid #301287" bg="inherit" rounded={"2xl"}>
            <Image
              as={NextImage}
              objectFit="cover"
              src={nft1}
              alt="Chakra UI"
              fill
            />
            <CardFooter>
              <Stack color="white">
                <Flex
                  align={"center"}
                  justify={"space-between"}
                  w={{ base: "200px", sm: "150px", md: "200px", lg: "220px" }}
                >
                  <Text>#3542</Text>
                  <Button
                    bg={"#301287"}
                    color={"white"}
                    w="50px"
                    _hover={{
                      bg: "#301287",
                    }}
                  >
                    Eth
                  </Button>
                </Flex>
                <Text>The Zenith Collection</Text>
              </Stack>
            </CardFooter>
          </Card>
          <Card border="2px solid #301287" bg="inherit" rounded={"2xl"}>
            <Image
              as={NextImage}
              objectFit="cover"
              src={nft1}
              alt="Chakra UI"
              fill
            />
            <CardFooter>
              <Stack color="white">
                <Flex align={"center"}>
                  <Text>#3542</Text>
                  <Spacer />
                  <Button flex="1" bg={"#301287"} color={"white"}>
                    Eth
                  </Button>
                </Flex>
                <Text>The Zenith Collection</Text>
              </Stack>
            </CardFooter>
          </Card>
          <Card border="2px solid #301287" bg="inherit" rounded={"2xl"}>
            <Image
              as={NextImage}
              objectFit="cover"
              src={nft1}
              alt="Chakra UI"
              fill
            />
            <CardFooter>
              <Stack color="white">
                <Flex align={"center"}>
                  <Text>#3542</Text>
                  <Spacer />
                  <Button flex="1" bg={"#301287"} color={"white"}>
                    Eth
                  </Button>
                </Flex>
                <Text>The Zenith Collection</Text>
              </Stack>
            </CardFooter>
          </Card>
          <Card border="2px solid #301287" bg="inherit" rounded={"2xl"}>
            <Image
              as={NextImage}
              objectFit="cover"
              src={nft1}
              alt="Chakra UI"
              fill
            />
            <CardFooter>
              <Stack color="white">
                <Flex align={"center"}>
                  <Text>#3542</Text>
                  <Spacer />
                  <Button flex="1" bg={"#301287"} color={"white"}>
                    Eth
                  </Button>
                </Flex>
                <Text>The Zenith Collection</Text>
              </Stack>
            </CardFooter>
          </Card>
          <Card border="2px solid #301287" bg="inherit" rounded={"2xl"}>
            <Image
              as={NextImage}
              objectFit="cover"
              src={nft1}
              alt="Chakra UI"
              fill
            />
            <CardFooter>
              <Stack color="white">
                <Flex align={"center"}>
                  <Text>#3542</Text>
                  <Spacer />
                  <Button flex="1" bg={"#301287"} color={"white"}>
                    Eth
                  </Button>
                </Flex>
                <Text>The Zenith Collection</Text>
              </Stack>
            </CardFooter>
          </Card>
          <Card border="2px solid #301287" bg="inherit" rounded={"2xl"}>
            <Image
              as={NextImage}
              objectFit="cover"
              src={nft1}
              alt="Chakra UI"
              fill
            />
            <CardFooter>
              <Stack color="white">
                <Flex align={"center"}>
                  <Text>#3542</Text>
                  <Spacer />
                  <Button flex="1" bg={"#301287"} color={"white"}>
                    Eth
                  </Button>
                </Flex>
                <Text>The Zenith Collection</Text>
              </Stack>
            </CardFooter>
          </Card>
          <Card border="2px solid #301287" bg="inherit" rounded={"2xl"}>
            <Image
              as={NextImage}
              objectFit="cover"
              src={nft1}
              alt="Chakra UI"
              fill
            />
            <CardFooter>
              <Stack color="white">
                <Flex align={"center"}>
                  <Text>#3542</Text>
                  <Spacer />
                  <Button flex="1" bg={"#301287"} color={"white"}>
                    Eth
                  </Button>
                </Flex>
                <Text>The Zenith Collection</Text>
              </Stack>
            </CardFooter>
          </Card>
          <Card border="2px solid #301287" bg="inherit" rounded={"2xl"}>
            <Image
              as={NextImage}
              objectFit="cover"
              src={nft1}
              alt="Chakra UI"
              fill
            />
            <CardFooter>
              <Stack color="white">
                <Flex align={"center"}>
                  <Text>#3542</Text>
                  <Spacer />
                  <Button flex="1" bg={"#301287"} color={"white"}>
                    Eth
                  </Button>
                </Flex>
                <Text>The Zenith Collection</Text>
              </Stack>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Flex>
    </>
    // <SimpleGrid columns={3} spacing={10}>
    //   {cardData.map((card, index) => (
    //     <Box
    //       key={index}
    //       maxW="sm"
    //       borderWidth="1px"
    //       borderRadius="lg"
    //       overflow="hidden"
    //     >
    //       <Image src={card.image} alt={`Card image ${index + 1}`} fill />
    //       <Box p="6">
    //         <Box d="flex" alignItems="baseline">
    //           <Box
    //             mt="1"
    //             fontWeight="semibold"
    //             as="h4"
    //             lineHeight="tight"
    //             isTruncated
    //           >
    //             {card.text}
    //             <Button flex="1">Eth</Button>
    //             <Text>The Zenith Collection</Text>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Box>
    //   ))}
    // </SimpleGrid>
  );
};

export default CardComponent;

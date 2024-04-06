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
const nftData = [
  { src: nft1, id: "#3542", title: "The Zenith Collection" },
  { src: nft2, id: "#3542", title: "The Zenith Collection" },
  { src: nft3, id: "#3542", title: "The Zenith Collection" },
  { src: nft1, id: "#3542", title: "The Zenith Collection" },
  { src: nft2, id: "#3542", title: "The Zenith Collection" },
  { src: nft3, id: "#3542", title: "The Zenith Collection" },
  { src: nft1, id: "#3542", title: "The Zenith Collection" },
  { src: nft2, id: "#3542", title: "The Zenith Collection" },
  // Add more NFT data objects as needed
];

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
          {nftData.map((nft) => (
            <Card
              key={nft.id}
              border="2px solid #301287"
              bg="inherit"
              rounded={"2xl"}
            >
              <Image
                as={NextImage}
                objectFit="cover"
                src={nft.src}
                alt="NFT"
                fill
              />
              <CardFooter>
                <Stack color="white">
                  <Flex
                    align="center"
                    justify="space-between"
                    w={{ base: "200px", sm: "150px", md: "200px", lg: "220px" }}
                  >
                    <Text>{nft.id}</Text>
                    <Button
                      bg="#301287"
                      color="white"
                      w="50px"
                      _hover={{ bg: "#301287" }}
                    >
                      Eth
                    </Button>
                  </Flex>
                  <Text>{nft.title}</Text>
                </Stack>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default CardComponent;

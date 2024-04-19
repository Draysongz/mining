"use client";
import React, { useState } from "react";
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
import { IoMdList } from "react-icons/io";
import CModal from "./createModal";

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

export default function MinerCard() {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Flex direction={"column"} p={5} bg={"#10062D"}>
        <Flex p={5} justify={"space-between"}>
          <Button
            border="2px solid #301287"
            width={"100px"}
            size={"sm"}
            variant="outline"
            color="white"
            leftIcon={<IoMdList />}
            _hover="inherit"
          >
            Filter
          </Button>

          <Button bg="#301287" color="white" _hover={{ bg: "#301287" }}>
            Upgrade
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

              <Stack color="white" p={5}>
                <Flex align={"start"} justify={"space-between"}>
                  <Text>{nft.id}</Text>
                  <Button
                    bg="#301287"
                    color="white"
                    w="50px"
                    _hover={{ bg: "#301287" }}
                    onClick={handleButtonClick}
                  >
                    Eth
                  </Button>
                  {isOpen && <CModal onClose={() => setIsOpen(false)} />}
                </Flex>
                <Text textAlign={"start"}>{nft.title}</Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}
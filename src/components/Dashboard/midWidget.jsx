import {
  Stack,
  Box,
  Flex,
  Card,
  SimpleGrid,
  Heading,
  Text,
  Button,
  HStack,
  Image,
  Icon,
} from "@chakra-ui/react";
import NextImage from "next/image";
import Rec1 from "../../images/Rectangle 4 (1).png";
import Rec2 from "../../images/Rectangle 4 (2).png";
import Rec from "../../images/Rectangle 4.png";
import { FaChartPie } from "react-icons/fa";

export default function MidWidget() {
  const cardData = [
    { title: "Total Rewards", text: "Monthly Analysis" },
    { title: "Miners", text: "Computing Power" },
    // Add more card data objects as needed
  ];
  return (
    <>
      <SimpleGrid gap={5} columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
        {cardData.map((card) => (
          <Card
            rounded={"2xl"}
            key={card.src}
            border="2px solid #301287"
            bg="#10062D"
          >
            <Flex justify="space-between">
              <Flex>
                <Text color={"white"}>{card.text}</Text>
              </Flex>
              <Box bg={"#EDE8FC"} rounded="full" p={2}>
                <Icon boxSize={6} color={"#301287"} as={FaChartPie} />
              </Box>
            </Flex>

            <Stack color={"white"} p={2}>
              {/* <Text fontSize={"xs"}>{card.text}</Text>
              <Text fontSize={"2xl"} whiteSpace="pre-wrap">
                {card.title}
              </Text> */}
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

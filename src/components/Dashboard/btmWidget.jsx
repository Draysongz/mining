import {
  Stack,
  Box,
  Flex,
  Card,
  SimpleGrid,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaChartPie } from "react-icons/fa";

export default function BtmWidget() {
  const cardData = [
    { title: "Monthly Analysis", text: "Total Rewards" },
    // Add more card data objects as needed
  ];
  return (
    <>
      <SimpleGrid gap={5} columns={{ base: 1, sm: 1, md: 1, lg: 1 }}>
        {cardData.map((card) => (
          <Card
            rounded={"2xl"}
            key={card.src}
            border="2px solid #301287"
            bg="#301287"
            px={6}
            py={4}
            height={"300px"}
          >
            <Flex justify="space-between">
              <Flex>
                <Text color={"white"} fontWeight={"500"}>
                  {card.text}
                </Text>
              </Flex>
              <Box bg={"#EDE8FC"} rounded="full" p={1}>
                <Icon boxSize={8} color={"#501EE1"} as={FaChartPie} />
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

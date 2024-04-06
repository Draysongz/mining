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

import { Stack, Box, Card, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import { FaChartPie } from "react-icons/fa";

export default function TopWidget() {
  const cardData = [
    { title: "Total Rewards", text: "$0.0561" },
    { title: "Miners", text: "1 Miner" },
    { title: "Power", text: "1 TH/s" },
    { title: "Mean Efficiency", text: "35 W/TH" },
    // Add more card data objects as needed
  ];
  return (
    <>
      <SimpleGrid gap={5} columns={{ base: 1, sm: 2, md: 2, lg: 4 }}>
        {cardData.map((card) => (
          <Card
            rounded={"2xl"}
            size="sm"
            key={card.src}
            border="2px solid #301287"
            align={"center"}
            justify={"space-around"}
            flexDirection="row"
            bg="#10062D"
          >
            <Box bg={"#EDE8FC"} rounded="full" p={2}>
              <Icon boxSize={6} color={"#301287"} as={FaChartPie} />
            </Box>

            <Stack color={"white"} p={2}>
              <Text fontSize={"xs"}>{card.text}</Text>
              <Text fontSize={"2xl"} whiteSpace="pre-wrap">
                {card.title}
              </Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

import {
  Stack,
  Box,
  Card,
  SimpleGrid,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaChartPie } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function TopWidget({miner}) {


  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (miner) {
        const newBalance = miner.getCurrentBalance();
        setBalance(newBalance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [miner]);

  const cardData = [
    { title: "Total Rewards", text: balance ? parseFloat(balance).toFixed(8): 0 },
    { title: "Miners", text: "1 Miner" },
    { title: "Power", text: miner?.hashRate ? miner.hashRate : 1 },
    { title: "Mean Efficiency", text: "35 W/TH" },
    // Add more card data objects as needed
  ];

  console.log('miner from top widget', miner)
  return (
    <>
      <SimpleGrid gap={10} columns={{ base: 1, sm: 2, md: 2, lg: 4 }}>
        {cardData.map((card) => (
          <Flex
            rounded={"2xl"}
            size="sm"
            key={card.src}
            border="2px solid #301287"
            align={"center"}
            justify={"space-around"}
            bg="#10062D"
            direction={"row"}
            px={6}
            py={4}
          >
            <Box bg={"#EDE8FC"} rounded="full" p={1}>
              <Icon boxSize={8} color={"#301287"} as={FaChartPie} />
            </Box>

            <Stack color={"white"} p={2}>
              <Text fontSize={"xs"} fontWeight="500">
                {card.title}
              </Text>
              <Text fontSize={"lg"} fontWeight="800">
                {card.text}
              </Text>
            </Stack>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
}

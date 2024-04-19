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
import Miner from "@/pages/api/Controllers/miner";

export default function TopWidget({miner}) {


  const [balance, setBalance] = useState(0);
  const [userId, setUserId] = useState('')

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
    { title: "Total Rewards", text: balance ? parseFloat(balance).toFixed(20): 0 },
    { title: "Miners", text: "1 Miner" },
    { title: "Power", text: miner?.hashRate ? miner.hashRate : 1 },
    { title: "Mean Efficiency", text: "35 W/TH" },
    // Add more card data objects as needed
  ];

  console.log('miner from top widget', miner)
  async function saveToDatabase(miner, userId) {
    try {
        let minerDoc = await MinerModel.findOne({ userId: userId });
        if (!miner) {
            minerDoc = new MinerModel({
                userId: userId,
                hashRate: miner.hashRate,
                cost: miner.cost,
                totalMinedToday: miner.totalMinedToday,
                miningStarted: miner.miningStarted,
                btcToUsd: miner.btcToUsd
            });
        } else {
            minerDoc.hashRate = miner.hashRate
            minerDoc.cost = miner.cost;
            minerDoc.totalMinedToday = miner.totalMinedToday;
            minerDoc.miningStarted = miner.miningStarted;
            minerDoc.btcToUsd = miner.btcToUsd;
        }
        await minerDoc.save();
        console.log(`Miner data saved to database for user ${userId}`);
    } catch (error) {
        console.error('Error saving miner data to database:', error.message);
    }
}

  async function loadFromDatabase(userId, ) {
    try {
        const minerData = await MinerModel.findOne({ userId });
        if (minerData) {
            const miner = new Miner(userId, minerData.hashRate, minerData.cost);
            miner.totalMinedToday = minerData.totalMinedToday;
            miner.miningStarted = minerData.miningStarted;
            miner.btcToUsd = minerData.btcToUsd;
            return miner;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error loading miner data from database:', error.message);
        return null;
    }
}
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

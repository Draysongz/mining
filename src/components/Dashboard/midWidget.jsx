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
  CardBody,
} from "@chakra-ui/react";
import NextImage from "next/image";
import Rec1 from "../../images/Rectangle 4 (1).png";
import Rec2 from "../../images/Rectangle 4 (2).png";
import Rec from "../../images/Rectangle 4.png";
import { FaChartPie } from "react-icons/fa";
import { ComputeChart, MonthChart } from "./chart";
import { IoMdArrowDropup } from "react-icons/io";
import Example, { AreaExample } from "./chart2";

export default function MidWidget() {
  // const cardData = [
  //   { title: "Total Rewards", text: "Monthly Analysis" },
  //   { title: "Miners", text: "Computing Power" },
  //   // Add more card data objects as needed
  // ];
  return (
    <>
      <SimpleGrid gap={5} columns={{ base: 1, sm: 1, md: 1, lg: 2 }}>
        <Card
          rounded={"2xl"}
          border="2px solid #301287"
          bg="#301287"
          px={6}
          py={4}
          h={{ base: "500px", md: "400px" }}
        >
          <Flex justify="space-between">
            <Flex>
              <Text color={"white"} fontWeight="500">
                Monthly Analysis
              </Text>
            </Flex>
            <Box bg={"#EDE8FC"} rounded="full" p={1}>
              <Icon boxSize={8} color={"#501EE1"} as={FaChartPie} />
            </Box>
          </Flex>
          <CardBody>
            <Stack w={"30%"} direction={{ base: "row", md: "column" }}>
              <Heading size={"lg"}>$15.6K</Heading>
              <Text>Total Spent</Text>
              <Flex align={"center"}>
                <IoMdArrowDropup color={"#00D87D"} />
                <Text color={"#00D87D"}>+2.45%</Text>
              </Flex>
            </Stack>

            <MonthChart />
          </CardBody>
          {/* <AreaExample /> */}
        </Card>
        <Card
          rounded={"2xl"}
          border="2px solid #301287"
          bg="#301287"
          px={6}
          py={4}
          h={{ base: "500px", md: "400px" }}
        >
          <Flex justify="space-between">
            <Flex>
              <Text color={"white"} fontWeight="500">
                Computing Power
              </Text>
            </Flex>
            <Box bg={"#EDE8FC"} rounded="full" p={1}>
              <Icon boxSize={8} color={"#501EE1"} as={FaChartPie} />
            </Box>
          </Flex>
          <CardBody>
            <Example />
            {/* <ComputeChart /> */}
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
}

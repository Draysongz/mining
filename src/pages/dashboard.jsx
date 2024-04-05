import IndexSidebar from "@/components/sidebar";
import {
  Stack,
  Box,
  Heading,
  Spacer,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import CardComponent from "@/components/Dashboard/dashCard2";
import DashTab from "@/components/Dashboard/dashTab";
import Navbar from "@/components/navbar";
import NextLink from "next/link";

export default function () {
  return (
    <>
      <Box>
        {/* <IndexSidebar /> */}
        <Flex>
          <Navbar />
        </Flex>
        <Spacer />
        {/* Sidebar and dashscreen */}
        <Flex flexDir={["row", "row", "row"]}>
          <Flex
            w={["20%", "15%", "10%"]}
            minH={"100vh"}
            align="start"
            justify={"center"}
            bg={"#10062D"}
            color="#fff"
          >
            <Flex flexDir="column" p={10}>
              <Flex p={5}>
                <Text
                  as={NextLink}
                  href={"/"}
                  fontSize={{ base: "xs", md: "md" }}
                >
                  My NFT
                </Text>
              </Flex>
              <Flex p={5}>
                <Text
                  as={NextLink}
                  href={"/"}
                  fontSize={{ base: "xs", lg: "md" }}
                >
                  Marketplace
                </Text>
              </Flex>
              <Flex p={5}>
                <Text
                  as={NextLink}
                  href={"/"}
                  fontSize={{ base: "xs", lg: "md" }}
                >
                  Rewards
                </Text>
              </Flex>
              <Flex p={5}>
                <Text
                  as={NextLink}
                  href={"/"}
                  fontSize={{ base: "xs", lg: "md" }}
                >
                  Referrals
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Stack
            w={["80%", "85%", "90%"]}
            bg={"#10062D"}
            color="#fff"
            borderLeft="2px solid #301287"
            spacing={5}
            p={5}
          >
            {/* Tab Section */}
            <DashTab />
            {/* Card Section */}
            <CardComponent />
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

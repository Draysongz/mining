import IndexSidebar from "@/components/sidebar";
import {
  Stack,
  Box,
  Heading,
  Spacer,
  Flex,
  Link,
  Text,
  Icon,
} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import NextLink from "next/link";
import TopWidget from "@/components/Dashboard/topWidget";
import MidWidget from "@/components/Dashboard/midWidget";
import BtmWidget from "@/components/Dashboard/btmWidget";


export default async function dashboard() {
  return (
    <>
      <Box>
        {/* Navbar */}
        <Flex>
          <Navbar />
        </Flex>
        <Spacer />
        {/* Sidebar and dashscreen */}
        <Flex flexDir={["row", "row", "row", "row"]}>
          {/* Sidebar Component */}
          <IndexSidebar />
          {/* Dashscreen Components */}
          <Stack
            w={["75%", "80%", "85%", "85%"]}
            bg={"#10062D"}
            color="#fff"
            borderLeft="2px solid #301287"
            spacing={10}
            p={5}
          >
            {/* Top Section */}
            <TopWidget />
            {/* Mid Section */}
            <MidWidget />
            {/* Bottom Section */}
            <BtmWidget />
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

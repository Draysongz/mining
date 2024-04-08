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
import NextLink from "next/link";
import { IoHome } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { MdGroups } from "react-icons/md";

export default function IndexSidebar() {
  const navData = [
    { icon: IoHome, title: "My NFT", link: "/dashboard" },
    { icon: FaCartArrowDown, title: "Marketplace", link: "/marketplace" },
    { icon: CiMoneyBill, title: "Rewards", link: "/" },
    { icon: MdGroups, title: "Referrals", link: "/referrals" },
  ];
  return (
    <>
      {" "}
      <Flex
        w={["25%", "20%", "15%", "15%"]}
        minH={"100vh"}
        align="start"
        justify={"center"}
        bg={"#10062D"}
        color="#fff"
        p={5}
      >
        <Flex flexDir="column" p={5} fontWeight={700}>
          {navData.map((item) => (
            <Flex
              key={item.title}
              p={5}
              align="center"
              justify={"space-around"}
              gap={1}
            >
              <Icon as={item.icon} boxSize={5} />
              <Text
                as={NextLink}
                href={item.link}
                fontSize={{ base: "xs", md: "md" }}
              >
                {item.title}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

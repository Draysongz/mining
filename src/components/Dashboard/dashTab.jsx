import IndexSidebar from "@/components/sidebar";
import {
  Stack,
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Button,
  HStack,
  Image,
} from "@chakra-ui/react";
import NextImage from "next/image";
import Rec1 from "../../images/Rectangle 4 (1).png";

export default function DashTab() {
  return (
    <>
      <Flex p={5}>
        <Tabs variant={"soft-rounded"} colorScheme="blue">
          <TabList>
            <Tab>All</Tab>
            <Tab>Top</Tab>
            <Tab>Trending</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex>
                <SimpleGrid
                  gap={"5"}
                  columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
                >
                  <Card rounded={"2xl"} size="md" position="relative">
                    <Image
                      as={NextImage}
                      src={Rec1}
                      placeholder="blur"
                      quality={100}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <Stack color={"white"} p={2} pos="absolute">
                      <Text fontSize={"xs"}>5,000 NFTS</Text>
                      <Text fontSize={"2xl"}>The Zenith Collection</Text>
                    </Stack>
                  </Card>
                  <Card rounded={"2xl"} size="sm" position="relative">
                    <Image
                      as={NextImage}
                      src={Rec1}
                      placeholder="blur"
                      quality={100}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <Stack color={"white"} p={2} pos="absolute">
                      <Text fontSize={"xs"}>5,000 NFTS</Text>
                      <Text fontSize={"2xl"}>The Zenith Collection</Text>
                    </Stack>
                  </Card>
                  <Card rounded={"2xl"} size="sm" position="relative">
                    <Image
                      as={NextImage}
                      src={Rec1}
                      placeholder="blur"
                      quality={100}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <Stack color={"white"} p={2} pos="absolute">
                      <Text fontSize={"xs"}>5,000 NFTS</Text>
                      <Text fontSize={"2xl"}>The Zenith Collection</Text>
                    </Stack>
                  </Card>
                  <Card rounded={"2xl"} size="sm" position="relative">
                    <Image
                      as={NextImage}
                      src={Rec1}
                      placeholder="blur"
                      quality={100}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <Stack color={"white"} p={2} pos="absolute">
                      <Text fontSize={"xs"}>5,000 NFTS</Text>
                      <Text fontSize={"2xl"}>The Zenith Collection</Text>
                    </Stack>
                  </Card>
                  {/* <Card>
                    <CardBody rounded={"lg"}>
                      <Image
                        src={Rec1}
                        placeholder="blur"
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                      <Stack color={"white"} position="absolute">
                        <Text>5,000 NFTS</Text>
                        <Text>The Zenith Collection</Text>
                      </Stack>
                    </CardBody>
                  </Card> */}
                </SimpleGrid>
              </Flex>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  IconButton,
  Text,
  Button,
  ButtonGroup,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Image,
  FormControl,
  FormLabel,
  Select,
  RadioGroup,
  Radio,
  Divider,
  Icon,
  Box,
} from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { SiBitcoincash } from "react-icons/si";

export default function PaymentModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg="#3b49df" color="white" _hover="inherit" onClick={onOpen}>
        Next
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"#10062D"}
          border="2px solid #301287"
          textColor={"#ffffff"}
        >
          <ModalHeader textAlign={"center"}>Payment method</ModalHeader>
          <ModalBody>
            <Stack>
              <Text>
                The miner will belong to you permanently. You'll be able to mint
                it to your wallet, upgrade it, and resell it anytime.
              </Text>
              <Flex p={5}></Flex>
              <Tabs isFitted variant="enclosed">
                <TabList>
                  <Tab>By Card</Tab>
                  <Tab>By Crypto</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel bg="#3b49df">
                    <FormControl p={2}>
                      <FormLabel>Country/Region</FormLabel>
                      <Select placeholder="Select country" textColor={"black"}>
                        <option>United States of America</option>
                        <option>Nigeria</option>
                      </Select>
                    </FormControl>
                    <Flex p={2} bg={"gray"} rounded="2xl">
                      <Text fontSize="xs">
                        For more payment options select another country or
                        region
                      </Text>
                    </Flex>
                    <RadioGroup p={2}>
                      <Radio>
                        <Flex align={"center"} gap={2}>
                          <Box bg={"orange"} rounded={"full"} p={2}>
                            {" "}
                            <Icon
                              boxSize={6}
                              as={FaRegCreditCard}
                              color={"yellow.50"}
                            />
                          </Box>
                          <Stack>
                            <Text>By Card</Text>
                            <Flex align={"center"} justify="space-between">
                              <Text fontSize={"xs"}>USD</Text>
                              <Icon
                                as={FaCcMastercard}
                                fontSize="sm"
                                color={"yellow.50"}
                              />
                            </Flex>
                          </Stack>
                        </Flex>
                      </Radio>
                    </RadioGroup>
                    <Flex p={2}>
                      <Text fontSize="xs">
                        The payment will be processed by a third party. By
                        paying, you agree to buy virtual Miners NFT and
                        automatically add them to your collection.
                      </Text>
                    </Flex>
                    <Stack p={2}>
                      <Flex align={"center"} justify={"space-between"}>
                        <Text>Price per TH</Text>
                        <Text>$27.99</Text>
                      </Flex>
                      <Flex align={"center"} justify={"space-between"}>
                        <Text>Historical ROI</Text>
                        <Text>58.72</Text>
                      </Flex>
                      <Flex align={"center"} justify={"space-between"}>
                        <Flex>
                          <Text>Total</Text>
                        </Flex>
                        <Stack align={"end"}>
                          <Text>83.58</Text>
                          <Text>29.14 USD</Text>
                          <Text>Includes fee 1.15 USD</Text>
                        </Stack>
                      </Flex>
                      <Divider />
                      <Flex>
                        <Text>Promo code</Text>
                      </Flex>
                    </Stack>
                  </TabPanel>
                  <TabPanel>
                    <RadioGroup defaultValue="1">
                      <Stack>
                        <Radio value="1">
                          <Flex align={"center"} gap={2}>
                            <Box bg={"orange"} rounded={"full"} p={2}>
                              <Icon
                                boxSize={6}
                                as={SiBitcoincash}
                                color={"yellow.50"}
                              />
                            </Box>
                            <Stack>
                              <Text>Miner</Text>
                              <Text as={"sub"}>ERC-20/BEP-20</Text>
                            </Stack>
                          </Flex>
                        </Radio>
                        <Radio value="2">
                          <Flex align={"center"} gap={2}>
                            <Box bg={"green"} rounded={"full"} p={2}>
                              <Icon
                                boxSize={6}
                                as={SiTether}
                                color={"green.50"}
                              />
                            </Box>
                            <Stack>
                              <Text>USDT</Text>
                              <Text as={"sub"}>ERC-20 /BEP-20 / TRC-20</Text>
                            </Stack>
                          </Flex>
                        </Radio>
                        <Radio value="3">
                          {" "}
                          <Flex align={"center"} gap={2}>
                            <Box bg={"orange"} rounded={"full"} p={2}>
                              <Icon
                                boxSize={6}
                                as={SiBinance}
                                color={"yellow.50"}
                              />
                            </Box>
                            <Stack>
                              <Text>Binance Pay</Text>
                              <Text as={"sub"}>
                                Pay with your Binance account
                              </Text>
                            </Stack>
                          </Flex>
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <Flex p={5}></Flex>
                    <Stack>
                      <Flex align={"center"} justify={"space-between"}>
                        <Text>Price per TH</Text>
                        <Text>$27.99</Text>
                      </Flex>
                      <Flex align={"center"} justify={"space-between"}>
                        <Text>Historical ROI</Text>
                        <Text>58.72</Text>
                      </Flex>
                      <Flex align={"center"} justify={"space-between"}>
                        <Flex>
                          <Text>Total</Text>
                        </Flex>
                        <Stack align={"end"}>
                          <Text>83.58</Text>
                          <Text>29.14 USD</Text>
                          <Text>Includes fee 1.15 USD</Text>
                        </Stack>
                      </Flex>
                      <Divider />
                      <Flex>
                        <Text>Promo code</Text>
                      </Flex>
                    </Stack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Back</Button>
            <Button bg="#3b49df" textColor={"white"} mr={3}>
              Pay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

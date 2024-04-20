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
import Rec9 from "../../images/Rectangle9.png";
import { useState } from "react";
import {toast} from 'react-toastify'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function PaymentModal({user, startMining, payout, power}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  const [miner, setMiner] = useState(null);
  const [balance, setBalance] = useState(0);

  const handleStartMining = async (e) => {
    e.preventDefault();
    
    const cost = power * 24;
    console.log(`the userId is ${user.userId}, with power ${power} which costs ${cost}`)
    startMining(user.userId, power, cost);
    toast.success("Miner created");
    onClose();
  };
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
              <Text fontSize={"xs"}>
                The miner will belong to you permanently. You'll be able to mint
                it to your wallet, upgrade it, and resell it anytime.
              </Text>
              <Flex p={1}></Flex>
              <Tabs isFitted variant="enclosed">
                <TabList>
                  <Tab>By Card</Tab>
                  <Tab>By Crypto</Tab>
                </TabList>
                <TabPanels
                  bg="#3b49df"
                  backgroundImage={`url(${Rec9.src})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  rounded={"lg"}
                >
                  <TabPanel>
                    <FormControl p={2}>
                      <FormLabel>Country/Region</FormLabel>
                      <Select placeholder="Select country" textColor={"black"}>
                        <option>United States of America</option>
                        <option>Nigeria</option>
                      </Select>
                    </FormControl>
                    <Flex p={1} bg={"gray.400"} rounded="lg" align={"center"}>
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
                              boxSize={4}
                              as={FaRegCreditCard}
                              color={"yellow.50"}
                            />
                          </Box>
                          <Stack>
                            <Text>By Card</Text>
                            <Flex align={"center"} justify="space-around">
                              <Text fontSize={"9px"} as={"sub"}>
                                USD
                              </Text>
                              <Icon
                                as={FaCcMastercard}
                                fontSize="md"
                                color={"yellow.50"}
                              />
                            </Flex>
                          </Stack>
                        </Flex>
                      </Radio>
                    </RadioGroup>
                    <Flex
                      p={2}
                      bg={"gray.400"}
                      rounded="lg"
                      align={"center"}
                      justify={"center"}
                    >
                      <Text fontSize="10px">
                        The payment will be processed by a third party. By
                        paying, you agree to buy virtual Miners NFT and
                        automatically add them to your collection.
                      </Text>
                    </Flex>
                    <Stack p={2}>
                      <Flex align={"center"} justify={"space-between"}>
                        <Text>Price per TH</Text>
                        <Text>$24</Text>
                      </Flex>
                      <Flex align={"center"} justify={"space-between"}>
                        <Text>Historical ROI</Text>
                        <Text>${payout}</Text>
                      </Flex>
                      <Flex align={"center"} justify={"space-between"}>
                        <Flex>
                          <Text>Total</Text>
                        </Flex>
                        <Stack align={"end"}>
                          <Text>${payout}</Text>
                          <Text>{power * 24 + 1.15}</Text>
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
                          <Flex
                            p={2}
                            align={"center"}
                            gap={2}
                            bg={"gray.400"}
                            w={"320px"}
                            rounded={"lg"}
                          >
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
                          <Flex
                            p={2}
                            align={"center"}
                            gap={2}
                            bg={"gray.400"}
                            w={"320px"}
                            rounded={"lg"}
                          >
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
                          <Flex
                            p={2}
                            align={"center"}
                            gap={2}
                            bg={"gray.400"}
                            w={"320px"}
                            rounded={"lg"}
                          >
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

          <ModalFooter alignContent={"center"} justifyContent={"space-around"}>
            <Button onClick={onClose}>Back</Button>
            <Button bg="#3b49df" textColor={"white"} mr={3}
            onClick={handleStartMining}>
              Pay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

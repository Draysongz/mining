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
} from "@chakra-ui/react";

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
                    <FormControl>
                      <FormLabel>Country/Region</FormLabel>
                      <Select placeholder="Select country" textColor={"black"}>
                        <option>United States of America</option>
                        <option>Nigeria</option>
                      </Select>
                    </FormControl>
                    <Flex p={2}>
                      <Text fontSize="xs">
                        For more payment options select another country or
                        region
                      </Text>
                    </Flex>
                    <RadioGroup>
                      <Radio>By Card</Radio>
                    </RadioGroup>
                    <Flex p={2}></Flex>
                    <Text fontSize="xs">
                      The payment will be processed by a third party. By paying,
                      you agree to buy virtual Miners NFT and automatically add
                      them to your collection.
                    </Text>
                    <Flex p={2}></Flex>
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
                  <TabPanel>
                    <RadioGroup defaultValue="1">
                      <Stack>
                        <Radio value="1">Miner</Radio>
                        <Radio value="2">USDT</Radio>
                        <Radio value="3">Binance Pay</Radio>
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

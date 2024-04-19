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
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import Rec9 from "../../images/Rectangle9.png";
import NextImage from "next/image";
import { useState, useEffect } from "react";
import Miner from "@/pages/api/Controllers/miner";
import { toast } from "react-toastify";
import PaymentModal from "./payModal";
import { ArrowForwardIcon, InfoOutlineIcon } from "@chakra-ui/icons";

export default function CModal({ user, startMining }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [power, setpower] = useState("");

  useEffect(() => {
    console.log(power);
  }, [power]);

  console.log(user);
  const [miner, setMiner] = useState(null);
  const [balance, setBalance] = useState(0);

  const handleStartMining = async (e) => {
    e.preventDefault();
    const cost = power * 24;
    startMining(user._id, power, cost);
    toast.success("Miner created");
    onClose();
  };

  return (
    <>
      <IconButton
        bg="#3b49df"
        color="white"
        _hover="inherit"
        onClick={onOpen}
        icon={<IoMdAdd />}
      ></IconButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"#10062D"}
          border="2px solid #301287"
          textColor={"#ffffff"}
        >
          <ModalHeader textAlign={"center"}>Create Miner</ModalHeader>
          <ModalBody>
            <Stack>
              <Heading size={"sm"}>Computing power</Heading>
              <ButtonGroup gap="4" variant={"outline"}>
                <Button
                  value={1}
                  onClick={(e) => setpower(e.target.value)}
                  color={"#00D87D"}
                  border="1px solid #301287"
                >
                  1 TH
                </Button>
                <Button
                  value={10}
                  onClick={(e) => setpower(e.target.value)}
                  color={"#00D87D"}
                  border="1px solid #301287"
                >
                  10 TH
                </Button>
                <Button
                  value={100}
                  onClick={(e) => setpower(e.target.value)}
                  color={"#00D87D"}
                  border="1px solid #301287"
                >
                  100 TH
                </Button>
                <Button color={"#ffffff"} border="1px solid #301287">
                  Custom
                </Button>
              </ButtonGroup>
              <Flex p={5}></Flex>
              <Heading size={"sm"}>Rewards Calculation</Heading>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab bg="#3b49df">Annually</Tab>
                  <Tab bg="#3b49df">Daily</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel
                    bg="#3b49df"
                    backgroundImage={`url(${Rec9.src})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    rounded={"lg"}
                  >
                    <TableContainer p={2} borderRadius={"lg"}>
                      <Table variant="simple">
                        <Tbody>
                          <Tr>
                            <Td fontSize="xs">POOL PAYOUT</Td>
                            <Td isNumeric>$3.300.00005195</Td>
                          </Tr>
                          <Tr>
                            <Td fontSize="xs">
                              <Flex align={"center"} justify={"space-between"}>
                                <Text>NET REWARD</Text> <InfoOutlineIcon />
                              </Flex>
                            </Td>
                            <Td isNumeric>2</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>

                    <Stack p={2} fontSize="xs">
                      <Text>Reward history</Text>
                      <Flex
                        p={3}
                        bg={"gray.400"}
                        rounded="2xl"
                        align={"center"}
                        justify={"space-between"}
                        gap={3}
                      >
                        <InfoOutlineIcon boxSize={4} />
                        <Text fontSize={"9px"}>
                          Bitcoin halving is expected around 21 April. Make sure
                          you adjust your investment strategy.
                        </Text>
                      </Flex>
                    </Stack>

                    <Flex p={2} align={"center"} justify="space-between">
                      <Text>Miner traits</Text>
                      <ArrowForwardIcon />
                    </Flex>
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
                        <Text>Total</Text>
                        <Text>27.99</Text>
                      </Flex>
                    </Stack>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <PaymentModal />
            {/* <Button
              bg="#3b49df"
              textColor={"white"}
              mr={3}
              onClick={handleStartMining}
            >
              Next
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

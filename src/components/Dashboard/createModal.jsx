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
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";

export default function CModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                <Button color={"#00D87D"} border="1px solid #301287">
                  1 TH
                </Button>
                <Button color={"#00D87D"} border="1px solid #301287">
                  10 TH
                </Button>
                <Button color={"#00D87D"} border="1px solid #301287">
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
                  <TabPanel bg="#3b49df">
                    <TableContainer>
                      <Table variant="simple">
                        <Tbody>
                          <Tr>
                            <Td>POOL PAYOUT</Td>
                            <Td isNumeric>$3.300.00005195</Td>
                          </Tr>
                          <Tr>
                            <Td>NET REWARD</Td>
                            <Td isNumeric>2</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button bg="#3b49df" textColor={"white"} mr={3} onClick={onClose}>
              Finish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

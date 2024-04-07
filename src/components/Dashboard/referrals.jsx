import { Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";

export default function Referrals() {
  return (
    <>
      <Flex>
        <Stack p={5} spacing={10}>
          {/* 1st Section */}
          <Flex
            border="2px solid #301287"
            rounded={"2xl"}
            p={5}
            align={"center"}
            justify={"space-between"}
          >
            <Flex>
              <Text>Total Referral Bonus</Text>
              <Text>₦0.00</Text>
            </Flex>
            <Flex>
              <Text>Total Referrals</Text>
              <Text>0</Text>
            </Flex>
            <Flex>
              <Button>Share Referral Link</Button>
            </Flex>
          </Flex>
          {/* 2nd Section */}
          <Flex align={"center"} justify={"space-between"}>
            <Heading>Refer Friends & Get Rewarded!</Heading>
            <Text>
              Get rewarded for sharing xxxxx with your friends. Invite them by
              using your unique code BLOCKCHAINBEAST link below.
            </Text>
          </Flex>
          {/* 3rd Section */}
          <Flex>
            <Text>https://app.xxxxx.com/s/BLOCKCHAINBEAST</Text>
            <Button>Copy</Button>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}

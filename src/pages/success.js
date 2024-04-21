// pages/success.js
import { useRouter } from 'next/router';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

export default function Success() {
    const router = useRouter();
    const { session_id } = router.query;

    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading as="h1" size="xl" mb={2}>
                Payment Successful!
            </Heading>
            <Text fontSize="lg" mb={2}>
                Thank you for your purchase. Your transaction has been completed.
            </Text>
            <Text fontSize="md" mb={4}>
                Your session ID: {session_id}
            </Text>
            <Button colorScheme="blue" onClick={() => router.push('/dashboard')}>
                Go to Home
            </Button>
        </Box>
    );
}

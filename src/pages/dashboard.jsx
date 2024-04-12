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
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Miner from "./api/Controllers/miner";
import DashScreen from "@/components/Dashboard/dashScreen";

export default function dashboard() {
  // Define state to store user data
  const [user, setUser] = useState(null);

  async function fetchUser(userId) {
    try {
      // Make a GET request to the user API route with the user ID as a query parameter
      const response = await axios.get(`/api/user?userId=${userId}`);

      // Return the user data from the response
      return response.data;
    } catch (error) {
      // Handle any errors
      console.error("Error fetching user:", error.message);
      return null; // Return null if an error occurs
    }
  }

  useEffect(() => {
    const userId = Cookies.get("userId");

    if (userId) {
      fetchUser(userId).then((user) => {
        if (user) {
          // User data is available
          console.log("User details:", user);
          setUser(user);
        } else {
          // User not found or error occurred
          console.log("User not found or error occurred.");
        }
      });
    }
  }, []);

  const [miner, setMiner] = useState(null);
  const [balance, setBalance] = useState(0);

  const startMining = (userId, hashRate, cost) => {
    const newMiner = new Miner(userId, hashRate, cost);
    newMiner.startMining();
    setMiner(newMiner);
  };

  const stopMining = () => {
    if (miner) {
      miner.stopMining();
      setMiner(null);
    }
  };

  return (
    <>
      <Box>
        {/* Navbar */}
        <Flex>
          <Navbar startMining={startMining} />
        </Flex>
        {/* Sidebar and dashscreen */}
        <Flex flexDir={["column", "row", "row", "row"]}>
          {/* Sidebar Component */}
          <IndexSidebar />
          {/* Dashscreen Components */}
          <DashScreen miner={miner} />
        </Flex>
      </Box>
    </>
  );
}

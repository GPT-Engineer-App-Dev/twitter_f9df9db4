import React, { useState } from "react";
import { Box, VStack, HStack, Avatar, Text, Heading, Textarea, Button, Divider, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaBell, FaEnvelope, FaUser } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== "") {
      setTweets([...tweets, { id: Date.now(), content: newTweet }]);
      setNewTweet("");
    }
  };

  return (
    <Box maxW="600px" mx="auto" py={8}>
      <HStack justify="space-between" mb={8}>
        <FaTwitter size={32} color="#1DA1F2" />
        <HStack spacing={4}>
          <IconButton icon={<FaHome />} variant="ghost" />
          <IconButton icon={<FaBell />} variant="ghost" />
          <IconButton icon={<FaEnvelope />} variant="ghost" />
          <IconButton icon={<FaUser />} variant="ghost" />
        </HStack>
      </HStack>

      <VStack spacing={4} align="stretch">
        <HStack>
          <Avatar src="https://placehold.co/600x400" />
          <Textarea value={newTweet} onChange={(e) => setNewTweet(e.target.value)} placeholder="What's happening?" resize="none" minH="100px" />
        </HStack>
        <Button colorScheme="twitter" alignSelf="flex-end" onClick={handleTweetSubmit}>
          Tweet
        </Button>
      </VStack>

      <Divider my={8} />

      <VStack spacing={6} align="stretch">
        {tweets.map((tweet) => (
          <Box key={tweet.id}>
            <HStack>
              <Avatar src="https://placehold.co/600x400" />
              <VStack align="start">
                <Heading size="sm">John Doe</Heading>
                <Text fontSize="sm" color="gray.500">
                  @johndoe
                </Text>
              </VStack>
            </HStack>
            <Text mt={2}>{tweet.content}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;

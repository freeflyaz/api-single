import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const EventDateCard = () => {
  return (
    <Flex borderRadius="sm" overflow="hidden" boxShadow="md">
      <Box bg="orange.400" color="white" p={4} >
        <Text fontSize="2xl" fontWeight="bold">
          24th
        </Text>
        <Text fontSize="2xl" fontWeight="bold">Feb</Text>
      </Box>
      <Box p={4} bg="white" color="gray.800" w="full">
        <Text fontSize="xl" fontWeight="bold">
          Code
        </Text>
        <Text fontSize="sm">11:13 am - February 24th, 2024</Text>
        <Text fontSize="sm">PC</Text>
      </Box>
    </Flex>
  );
};

export default EventDateCard;

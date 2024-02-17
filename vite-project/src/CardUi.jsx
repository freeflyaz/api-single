import React from 'react';
import {
  Box,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Button,
  Heading
} from '@chakra-ui/react';

const CardUi = () => {
  return (
    <Box maxW="sm" mx="auto" p={6} rounded="md" boxShadow="lg" bg="white">
      <Heading as="h3" size="lg" textAlign="center" mb={6}>
        Create a new event
      </Heading>
      <VStack spacing={4}>
        <FormControl id="title">
          <FormLabel>TITLE</FormLabel>
          <Input placeholder="Insert a title..." />
        </FormControl>
        <FormControl id="date">
          <FormLabel>DATE</FormLabel>
          <Input placeholder="dd/mm/yyyy --:--" type="datetime-local" />
        </FormControl>
        <FormControl id="venue">
          <FormLabel>VENUE</FormLabel>
          <Input placeholder="Insert a venue..." />
        </FormControl>
        <Button colorScheme="orange" width="full" mt={4}>
          Create
        </Button>
      </VStack>
    </Box>
  );
};

export default CardUi;

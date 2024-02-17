import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Heading,
  useColorModeValue,
  Select
} from '@chakra-ui/react';

const EventForm = () => {
  // For a more dynamic approach, these icons can be replaced with actual Chakra UI icons
  const iconPlaceholder = ''; // Placeholder for actual icons



  
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      p={8}
      maxW="md"
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      mx="auto"
    >
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Create a new event
      </Heading>
      <VStack spacing={4}>
        <FormControl id="title" isRequired>
          <FormLabel>TITLE</FormLabel>
          <Input placeholder="Placeholder" />
        </FormControl>
        <FormControl id="date" isRequired>
          <FormLabel>DATE</FormLabel>
          <Input placeholder="Placeholder" type="date" />
        </FormControl>
        <FormControl id="venue" isRequired>
          <FormLabel>VENUE</FormLabel>
          <Input placeholder="Placeholder" />
        </FormControl>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select placeholder="Select country">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
        <Button
          width="full"
          mt={4}
          bg="orange.400"
          color="white"
          _hover={{
            bg: 'orange.500'
          }}
        >
          {iconPlaceholder} Button {iconPlaceholder}
        </Button>
      </VStack>
    </Box>
  );
};

export default EventForm;

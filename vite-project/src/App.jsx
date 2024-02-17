import React from 'react';
import Card from './Card'; // Adjust the import path to where your Card component is located
import { ChakraProvider, Box, Text, Button, VStack } from '@chakra-ui/react';
import CardUi from './CardUi';
const App = () => {
  return (
    <div className="App">
      <Card />
      <CardUi />
      <ChakraProvider>
        <Box textAlign="center" fontSize="xl" p={5}>
          <VStack spacing={8}>
            <Text>Welcome to Chakra UI</Text>
            <Button colorScheme="teal" size="lg">
              Click me
            </Button>
          </VStack>
        </Box>
      </ChakraProvider>
    </div>
  );
};

export default App;

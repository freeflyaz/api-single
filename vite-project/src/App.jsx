import React from 'react';
import Card from './Card'; // Adjust the import path to where your Card component is located
import { ChakraProvider} from '@chakra-ui/react';
import CardUi from './CardUi';
import EventDateCard from './EventDateCard';
import EventForm from './EventForm';

const App = () => {
  return (
    <div className="App">
      {/* <Card /> */}
      <ChakraProvider>
      <EventDateCard />
        <CardUi />
        <EventForm />
      </ChakraProvider>
    </div>
  );
};

export default App;

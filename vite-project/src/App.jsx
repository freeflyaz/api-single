import React from 'react';
import Card from './Card'; // Adjust the import path to where your Card component is located
import { ChakraProvider } from '@chakra-ui/react';
import CardUi from './CardUi';
import EventDateCard from './EventDateCard';
import EventForm from './EventForm';
import LanguageSelector from './components/LanguageSelector';

const App = () => {
  return (
    <div className="App">
      {/* <Card /> */}
      <ChakraProvider>
        <LanguageSelector />
        <EventDateCard />
        <CardUi />
        <EventForm />
      </ChakraProvider>
    </div>
  );
};

export default App;

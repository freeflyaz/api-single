import { ChakraProvider } from '@chakra-ui/react';
import Container from './components/Container';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <Container />
      </ChakraProvider>
    </div>
  );
};

export default App;

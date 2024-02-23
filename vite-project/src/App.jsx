import { ChakraProvider } from '@chakra-ui/react';
import Container from './components/Container';
import ContainerQuiz from './components/ContainerQuiz';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <ContainerQuiz />
      </ChakraProvider>
    </div>
  );
};

export default App;

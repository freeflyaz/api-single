import { ChakraProvider } from '@chakra-ui/react';
import LanguageSelector from './components/LanguageSelector';
import List from './components/List';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <LanguageSelector />
        <List />
      </ChakraProvider>
    </div>
  );
};

export default App;

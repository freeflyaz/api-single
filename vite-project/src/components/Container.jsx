import List from './List';
import LanguageSelector from './LanguageSelector';
import { Flex, Box } from '@chakra-ui/react';

const Container = () => {
  return (
    <div className="Container">
      <Flex justifyContent="flex-end">
        <Box p="4">
          <LanguageSelector />
        </Box>
      </Flex>
      <List />
      <div>(back) 1 of 301</div>
    </div>
  );
};
export default Container;

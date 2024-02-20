import List from './List';
import LanguageSelector from './LanguageSelector';
import { Flex, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Container = () => {
  const [eventList, setEventList] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('de');

useEffect(() => {
  async function getQuestions() {
    const response = await fetch(`http://localhost:3000/q/1?lang=${selectedLanguage}`);
    const questions = await response.json();
    setEventList(questions);
  }
  getQuestions();
}, [selectedLanguage]);

const handleLanguageChange = (lang) => {
  alert(`http://localhost:3000/q/1?lang=${selectedLanguage}`);
  setSelectedLanguage(lang);
};

  return (
    <div className="Container">
      <Flex justifyContent="flex-end">
        <Box p="4">
        <LanguageSelector onLanguageChange={handleLanguageChange} />
        </Box>
      </Flex>
      <List eventList={eventList} />
      <div>(back) 1 of 301</div>
    </div>
  );
};
export default Container;

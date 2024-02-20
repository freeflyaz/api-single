import List from './List';
import LanguageSelector from './LanguageSelector';
import { Flex, Box, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Container = () => {
  const [eventList, setEventList] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('de');
  const [currentQuestionId, setCurrentQuestionId] = useState(1); // Starting with question 1
  const [isFlipped, setIsFlipped] = useState(false);
  const [lastSelectedLanguage, setLastSelectedLanguage] = useState(null); // Track the last selected non-German language

  async function getQuestions() {
    const response = await fetch(`http://localhost:3000/q/${currentQuestionId}?lang=${selectedLanguage}`);
    const questions = await response.json();
    setEventList(questions);
  }

useEffect(() => {
  getQuestions();
}, [selectedLanguage, currentQuestionId]);

const handleLanguageChange = (lang) => {
  if (lang !== 'de') setLastSelectedLanguage(lang); // Update the last selected non-German language
  setSelectedLanguage(lang);
  setIsFlipped(false); // Reset flip state when language is changed manually
};

function nextQuestion() {
  setCurrentQuestionId((prevId) => prevId + 1);
}

function prevQuestion() {
  setCurrentQuestionId((prevId) => prevId - 1);
}

const flip = () => {
  setIsFlipped(!isFlipped);
  if (!isFlipped) {
    // If not already flipped, flip to German and save the last selected language
    setLastSelectedLanguage(selectedLanguage);
    setSelectedLanguage('de');
  } else {
    // If flipped, revert to the last selected language
    setSelectedLanguage(lastSelectedLanguage);
  }
};

  return (
    <div className="Container">
      <Flex justifyContent="flex-end">
        <Box p="4">
        <LanguageSelector onLanguageChange={handleLanguageChange} />
        </Box>
      </Flex>
      <List eventList={eventList} />
      
      <div className="text-center">
       
       <Button colorScheme='green' onClick={() => prevQuestion()}>Prev</Button>
       <span style={{ padding: '125px' }}>{currentQuestionId} of 301</span>
       
       <Button colorScheme='green' onClick={() => flip()}>Flip </Button>
       <Button colorScheme='green' onClick={() => nextQuestion()}>Next</Button>
      </div>
    </div>
  );
};
export default Container;

import List from './List';
import LanguageSelector from './LanguageSelector';
import { Flex, Box, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Container = () => {
  const [eventList, setEventList] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('de');
  const [currentQuestionId, setCurrentQuestionId] = useState(1); // Starting with question 1

  // const [isFlipped, setIsFlipped] = useState(false);
  const [lastSelectedLanguage, setLastSelectedLanguage] = useState(null); // Track the last selected non-German language
  const [selectedFlag, setSelectedFlag] = useState('de');

  async function getQuestions() {
    const response = await fetch(
      `http://localhost:3000/q/${currentQuestionId}?lang=${selectedLanguage}`
    );
    const questions = await response.json();
    setEventList(questions);
  }

  useEffect(() => {
    getQuestions();
  }, [selectedLanguage, currentQuestionId]);

  const handleLanguageChange = (lang) => {
    if (lang !== 'de') {
      setLastSelectedLanguage(lang); // Update the last selected non-German language for flipping
      setSelectedFlag('de');
    }
    setSelectedLanguage(lang);
    // setIsFlipped(false); // Reset flip state when language is changed manually
  };

  function nextQuestion() {
    setCurrentQuestionId((prevId) => prevId + 1);
  }

  function prevQuestion() {
    setCurrentQuestionId((prevId) => prevId - 1);
  }

  const flip = () => {
    //setIsFlipped(!isFlipped);
    // if (isFlipped === false) {
    if (selectedLanguage !== 'de') {
      // also set the flag inside the flip btn to s

      // If not already flipped, flip to German and save the last selected language lastSelectedLanguage country flag

      setLastSelectedLanguage(selectedLanguage);
      setSelectedLanguage('de');
      setSelectedFlag(selectedLanguage);
    } else {
      // If flipped, revert to the last selected language

      //set language flag to 'de'
      setSelectedLanguage(lastSelectedLanguage);
      setSelectedFlag('de');
    }
  };

  const languageFlags = {
    en: 'us', // ISO 3166-1 alpha-2 code for the United Kingdom
    de: 'de', // Germany
    es: 'es', // Spain
    tk: 'tr', // Turkey
    el: 'gr',
    ja: 'jp', // Japan
    zh: 'cn'

    // Add more flags here
  };

  return (
    <div className="Container">
      <Flex justifyContent="center" alignItems="center">
        <Box p="4" >
      <span className={`flag-icon flag-icon-${languageFlags[selectedLanguage]} mr-2`}></span>
          <LanguageSelector onLanguageChange={handleLanguageChange} />
        </Box>
      </Flex>
      <List eventList={eventList} />

      <div className="text-center">
        <Button colorScheme="green" onClick={() => prevQuestion()}>
          Prev
        </Button>
        <span style={{ padding: '125px' }}>{currentQuestionId} of 301</span>

        <Button colorScheme="green" onClick={() => flip()}>
          show me in: 
          <span
            className={`flag-icon flag-icon-${languageFlags[selectedFlag]} mr-2`}
          ></span>
        </Button>
        <Button colorScheme="green" onClick={() => nextQuestion()}>
          Next
        </Button>
      </div>
    </div>
  );
};
export default Container;

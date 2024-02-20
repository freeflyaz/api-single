import { Box, useColorModeValue, Heading } from '@chakra-ui/react';

const Learning = ({ eventList }) => {
  const correctAnswer = `answer${eventList.correct}`;

  // Function to return the style based on whether the answer is correct or not
  const answerButtonStyle = (answerKey) => {
    return answerKey === correctAnswer
      ? 'mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-left'
      : 'mt-4 bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded w-full text-left';
  };

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      p={8}
      maxW="md"
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      mx="auto"
    >
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Learning German Culture
      </Heading>

      {eventList.name}
      <button className={answerButtonStyle('answerA')}>
        {eventList.answerA}
      </button>
      <button className={answerButtonStyle('answerB')}>
        {eventList.answerB}
      </button>
      <button className={answerButtonStyle('answerC')}>
        {eventList.answerC}
      </button>
      <button className={answerButtonStyle('answerD')}>
        {eventList.answerD}
      </button>
    </Box>
  );
};
export default Learning;

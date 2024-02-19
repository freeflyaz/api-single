import { Box, useColorModeValue, Heading } from '@chakra-ui/react';

const Learning = ({eventList}) => {
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
    <div className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-left"><button>{eventList.answerA}</button> </div>
    <div className="mt-4 bg-gray-100 font-bold py-2 px-4 rounded w-full text-left"><button>{eventList.answerB}</button> </div>
    <div className="mt-4 bg-gray-100 font-bold py-2 px-4 rounded w-full text-left"><button>{eventList.answerC}</button> </div>
    <div className="mt-4 bg-gray-100 font-bold py-2 px-4 rounded w-full text-left"><button>{eventList.answerD}</button> </div>     
  </Box>
)
  };
export default Learning;
  
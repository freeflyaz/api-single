import { Box, useColorModeValue, Heading } from '@chakra-ui/react';

const Learning = () => {
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

    Hello Julia! What is the capital of Germany and where does the Chancellor lives?
    <div className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-left"><button>Berlin, she lives in Madrid</button> </div>
    <div className="mt-4 bg-grey-500 font-bold py-2 px-4 rounded w-full text-left"><button>She lives far away in Congo, she lives</button> </div>
    <div className="mt-4 bg-grey-500 font-bold py-2 px-4 rounded w-full text-left"><button>I am not sure please ask her in Madrid</button> </div>
    <div className="mt-4 bg-grey-500 font-bold py-2 px-4 rounded w-full text-left"><button>London, she lives in Madrid</button> </div>     
  </Box>
)
  };
export default Learning;
  
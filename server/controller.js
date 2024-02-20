const model = require('./model');
const fetch = require('node-fetch');

// Function to call Google Translate API
async function translateText(text, targetLanguage) {
  const apiKey = 'AIzaSyBUg9CltTctTUz4RORlR7ZMdAmLUb6QKiw'; // Ensure your API key is stored securely
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
      }),
    });
    const data = await response.json();
    return data.data.translations.map(t => t.translatedText);
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error('Translation service failed');
  }
}

// Controller to get topics and translate if needed
const getTopics = async (req, res) => {
  try {
    const { id } = req.params; // Extract the id from request parameters
    const userLanguage = req.query.lang || 'de'; // Default to English if no query parameter
    
    const sendBack = await model.getTopics(id);
    // Check if translation is needed
    console.log('sendBack',sendBack);
    if (userLanguage !== 'de') {
      // Assuming sendBack is an object with text fields you want to translate
      const textsToTranslate = [
        sendBack.name,
        sendBack.answerA,
        sendBack.answerB,
        sendBack.answerC,
        sendBack.answerD,
      ];
      console.log(sendBack[2]);
      console.log('textsToTranslate', textsToTranslate);
      
      const translations = await translateText(textsToTranslate, userLanguage);
      
      // Replace original text with translations
      [sendBack.name, sendBack.answerA, sendBack.answerB, sendBack.answerC, sendBack.answerD] = translations;
    }
    
    res.send(sendBack);
  } catch (error) {
    console.log('error', error);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).send('An error occurred while fetching topics');
  }
};


// const  postTopics = async (req, res) => {
//   const topicData = req.body;
//   const topic = await model.postTopics(topicData);
//   res.status(201).json(topic);
// };

// const  deleteTopics = async (req, res) => {
//   const { id } = req.params; // Extract the id from request parameters
//   const result = await model.deleteTopics(id);
//   if (result) { // This condition might need to be adjusted based on what your model function returns
//     res.send({ message: `Task ${id} deleted successfully.` });
//   } else {
//     res.status(404).send({ message: `Task ${id} not found.` });
//   }
// };

// const  pathTopics = async (req, res) => {
//   const { id } = req.params; // Extract the id from request parameters
//   const update = req.body;
//   const result = await model.pathTopics(id, update);
//   if (result) { // This condition might need to be adjusted based on what your model function returns
//     res.send({ message: `Task ${id} updated successfully.` });
//   } else {
//     res.status(404).send({ message: `Task ${id} not found.` });
//   }
// };



module.exports = { getTopics };

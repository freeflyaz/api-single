const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

// Mock function to simulate fetching text from a database
async function fetchTextFromDatabase() {
  // Replace this with your actual database fetch logic
  
  return 'This text needs to be translated';
}

app.get('/', async (req, res) => {
  const userLanguage = req.query.lang || 'en'; // You could determine this based on user preference
  const originalText = await fetchTextFromDatabase();

  // If the user's language is the same as the original text, send it as is
  if (userLanguage === 'en') {
    res.send({ text: originalText });
    return;
  }

  // Otherwise, translate the text
  //const apiKey = process.env.GOOGLE_API_KEY;
  const apiKey = 'AIzaSyBUg9CltTctTUz4RORlR7ZMdAmLUb6QKiw';
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ q: originalText, target: userLanguage }),
    });
    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;
    res.send({ text: translatedText });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

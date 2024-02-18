import fetch from 'node-fetch';

const apiKey = 'AIzaSyBUg9CltTctTUz4RORlR7ZMdAmLUb6QKiw'; // Replace with your actual API key
const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
const data = {
  q: 'Hello, world!',
  target: 'es'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then((response) => response.json())
  .then((response) => {
    console.log(
      'Translated text:',
      response.data.translations[0].translatedText
    );
  })
  .catch((error) => {
    console.error('Error:', error);
  });

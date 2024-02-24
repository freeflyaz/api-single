import { Button } from '@chakra-ui/react';
import { useState } from 'react';

const QuizMode = ({ eventList }) => {
  // State to manage the styles of each button individually
  const [buttonAStyle, setButtonAStyle] = useState('basic');
  const [buttonBStyle, setButtonBStyle] = useState('basic');
  const [buttonCStyle, setButtonCStyle] = useState('basic');
  const [buttonDStyle, setButtonDStyle] = useState('basic');
  const [correct, setCorrect] = useState(null);

  // Style classes
  const basic = 'mt-4 bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded w-full text-left';
  const correctStyle = 'mt-4 border-4 border-green-500 bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded w-full text-left';
  const wrongStyle = 'mt-4 border-4 border-red-500 bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded w-full text-left';

  function checkAnswerHandler(selectedId) {
    // Determine the style for each button based on the selected answer
    const isCorrect = selectedId === eventList.correct;

    setButtonAStyle(eventList.correct === 'A' ? correctStyle : wrongStyle);
    setButtonBStyle(eventList.correct === 'B' ? correctStyle : wrongStyle);
    setButtonCStyle(eventList.correct === 'C' ? correctStyle : wrongStyle);
    setButtonDStyle(eventList.correct === 'D' ? correctStyle : wrongStyle);
    setCorrect('Correct Answer');
    // If the selected answer is incorrect, ensure the selected button has the wrongStyle
    // and the correct button has the correctStyle.
    if (!isCorrect) {
        setCorrect('False Answer');
      switch (selectedId) {
        case 'A': setButtonAStyle(wrongStyle); break;
        case 'B': setButtonBStyle(wrongStyle); break;
        case 'C': setButtonCStyle(wrongStyle); break;
        case 'D': setButtonDStyle(wrongStyle); break;
        default: break; // Do nothing if none of these cases match
      }
    }
  }

  return (
    <>
      <div className='p-4 text-center font-bold' >{correct}</div>
      <div>{eventList.name}</div>
      <button
        id="A"
        className={buttonAStyle === 'basic' ? basic : buttonAStyle}
        onClick={() => checkAnswerHandler('A')}
      >
        {eventList.answerA}
      </button>
      <button
        id="B"
        className={buttonBStyle === 'basic' ? basic : buttonBStyle}
        onClick={() => checkAnswerHandler('B')}
      >
        {eventList.answerB}
      </button>
      <button
        id="C"
        className={buttonCStyle === 'basic' ? basic : buttonCStyle}
        onClick={() => checkAnswerHandler('C')}
      >
        {eventList.answerC}
      </button>
      <button
        id="D"
        className={buttonDStyle === 'basic' ? basic : buttonDStyle}
        onClick={() => checkAnswerHandler('D')}
      >
        {eventList.answerD}
      </button>
    </>
  );
};

export default QuizMode;
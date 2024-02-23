import { Button } from '@chakra-ui/react';
import { useState } from 'react';

const QuizMode = ({ eventList }) => {
    const [buttonAStyle, setButtonAStyle] = useState('initialStyle');
//   const answerButtonStyle = (answerKey) => {
//     return 'mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-left';
//   };

  const initialStyle = 'mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-left';
  const newStyle = 'mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full text-left';

  function checkAnswerHandler(e) {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === eventList.correct) {
        console.log('Correct : ', eventList.correct);
        setButtonAStyle('newStyle');
    } else {
        console.log('wrong');
    }
}
  return (
    <>
      <div>{eventList.name}</div>
      <button
        id="A"
        className={buttonAStyle === 'initialStyle' ? initialStyle : newStyle}
        onClick={checkAnswerHandler}
      >
        {eventList.answerA}
      </button>
      <button
        id="B"
        className={buttonAStyle === 'initialStyle' ? initialStyle : newStyle}
        onClick={checkAnswerHandler}
      >
        {eventList.answerB}
      </button>
      <button
        id="C"
        className={buttonAStyle === 'initialStyle' ? initialStyle : newStyle}
        onClick={checkAnswerHandler}
      >
        {eventList.answerC}
      </button>
      <button
        id="D"
        className={buttonAStyle === 'initialStyle' ? initialStyle : newStyle}
        onClick={checkAnswerHandler}
      >
        {eventList.answerD}
      </button>
    </>
  );
};

export default QuizMode;

import { Button } from '@chakra-ui/react';

const QuizMode = ({ eventList }) => {
  const answerButtonStyle = (answerKey) => {
    return 'mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-left';
  };
  function checkAnswerHandler(e) {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === eventList.correct)
        console.log('Correct : ', eventList.correct);
    else
        console.log('wrong');
  }
  return (
    <>
      <div>{eventList.name}</div>
      <Button
        id="A"
        className={answerButtonStyle('answerA')}
        onClick={checkAnswerHandler}
      >
        {eventList.answerA}
      </Button>
      <Button
        id="B"
        className={answerButtonStyle('answerB')}
        onClick={checkAnswerHandler}
      >
        {eventList.answerB}
      </Button>
      <Button
        id="C"
        className={answerButtonStyle('answerC')}
        onClick={checkAnswerHandler}
      >
        {eventList.answerC}
      </Button>
      <Button
        id="D"
        className={answerButtonStyle('answerD')}
        onClick={checkAnswerHandler}
      >
        {eventList.answerD}
      </Button>
    </>
  );
};

export default QuizMode;

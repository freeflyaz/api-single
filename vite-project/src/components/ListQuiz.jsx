import QuizMode from './quizMode';

const List = ({resetQuizKey, eventList, setReady}) => {
  return (
    <QuizMode key={resetQuizKey} eventList={eventList} setReady={setReady} />
)
  };
export default List;
  
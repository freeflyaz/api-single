
const ScoreDisplay = ({ correctCount, incorrectCount }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ color: 'green', marginRight: 10 }}>{correctCount} : </span>
        <span style={{ color: 'red' }}>{incorrectCount}</span>
      </div>
    );
  };

export default ScoreDisplay;

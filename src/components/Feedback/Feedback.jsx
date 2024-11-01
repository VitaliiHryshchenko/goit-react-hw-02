const Feedback = ({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}</p>
      </div>
    </div>
  );
};

export default Feedback;

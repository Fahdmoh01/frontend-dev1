import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  //calculate ratings avareage
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating / feedback.length;
  }, 0);
  average = average.toFixed(1).replace(/[.,]0$/, ""); //set average to one decimal place with out trailing zeros
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4> Average Rating:{isNaN(average) ? 0 : average} </h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats;

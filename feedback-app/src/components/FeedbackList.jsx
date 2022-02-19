import FeedbackItem from "./FeedbackItem";
function FeebackList({ feedback }) {
  if (!feedback || feedback.length == 0) {
    return <div>No FeedBack yet</div>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FeebackList;

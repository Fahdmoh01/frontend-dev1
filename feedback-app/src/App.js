//Global states are set and manipulated in App.js
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedBackData from "./data/FeedBackData";

const App = () => {
  const [feedback, setFeedback] = useState(FeedBackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback ={feedback} />
      </div>
    </>
  );
};
export default App;

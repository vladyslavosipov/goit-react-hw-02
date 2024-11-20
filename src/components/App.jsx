import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(() => {
    const savedValue = window.localStorage.getItem("saved-value");
    return savedValue
      ? JSON.parse(savedValue)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setValue({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }
    setValue((prevValue) => ({
      ...prevValue,
      [feedbackType]: prevValue[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-value", JSON.stringify(value));
  }, [value]);

  const totalFeedback = value.good + value.neutral + value.bad;

  return (
    <div>
      <Description />
      <Options update={updateFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback value={value} />
      ) : (
        <Notification message="No feedback yet!" />
      )}
    </div>
  );
}

export default App;
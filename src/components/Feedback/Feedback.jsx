import React from "react";
import s from "./Feedback.module.css";

function Feedback({ value }) {
  const totalFeedback = value.good + value.neutral + value.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((value.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <ul>
        <li className={s.item}>Good: {value.good}</li>
        <li className={s.item}>Neutral: {value.neutral}</li>
        <li className={s.item}>Bad: {value.bad}</li>
        <li className={s.item}>Total: {totalFeedback}</li>
        <li className={s.item}>
          Positive Feedback: {positiveFeedbackPercentage}%
        </li>
      </ul>
    </div>
  );
}

export default Feedback;
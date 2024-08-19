import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import css from "../App/App.module.css";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValue = window.localStorage.getItem("values");
    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetClicks = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <div className={css.conteiner}>
      <Description />
      <Options onUpdate={updateFeedback} onReset={resetClicks} />
      {totalFeedback > 0 ? (
        <Feedback
          values={values}
          total={totalFeedback}
          positiv={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

import Button from "../Button/Button";
import styles from "./Answer.module.css";
import { useState } from "react";

const Answer = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={styles.answer_wrapper}>
      <p className={`${styles.answer_text} ${isVisible ? "" : styles.hidden}`}>
        {text}
      </p>
      <Button buttonText={"show"} onClick={() => setIsVisible(true)} />
    </div>
  );
};

export default Answer;

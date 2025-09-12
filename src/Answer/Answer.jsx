import Button from "../Button/Button";
import styles from "./Answer.module.css";
import { useState } from "react";

const Answer = ({ text, isVisible, setIsVisible }) => {
  return (
    <div>
      <div className={styles.answer_wrapper}>
        <Button buttonText={"👀"} onClick={() => setIsVisible(true)} />
        <p
          className={`${styles.answer_text} ${isVisible ? "" : styles.hidden}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Answer;

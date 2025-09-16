import Button from "../Button/Button";
import styles from "./Answer.module.css";
import { useState } from "react";

const Answer = ({ text, isVisible, setIsVisible, onClick }) => {
  return (
    <>
      <div className={styles.answer}>
        <div className={styles.answer_wrapper}>
          <p
            className={`${styles.answer_text} ${isVisible ? "" : styles.hidden}`}
          >
            {text}
          </p>
        </div>
      </div>
      <Button buttonText={"❤️"} setIsVisible={setIsVisible} onClick={onClick} />
    </>
  );
};

export default Answer;

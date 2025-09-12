import styles from "./Question.module.css";

const Question = ({ text }) => {
  return (
    <div className={styles.question_wrapper}>
      <p className={styles.question_text}>{text}</p>
    </div>
  );
};

export default Question;

import styles from "./Question.module.css";

const Question = ({ text, tag }) => {
  return (
    <div className={styles.question_wrapper}>
      <p className={styles.question_text}>{text}</p>
      <span className={`${styles.question_tag} ${styles[tag]}`}>{tag}</span>
    </div>
  );
};

export default Question;

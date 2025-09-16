import styles from "./Question.module.css";
import Button from "../Button/Button";
import Id from "../Id/Id";

const Question = ({ text, tag, setIsVisible, id }) => {
  return (
    <>
      <div className={styles.question}>
        <div className={styles.question_wrapper}>
          <p className={styles.question_text}>{text}</p>
          <span className={`${styles.question_tag} ${styles[tag]}`}>{tag}</span>
          <Id text={id} />
        </div>
        <Button buttonText={"👀"} onClick={() => setIsVisible(true)} />
      </div>
    </>
  );
};

export default Question;

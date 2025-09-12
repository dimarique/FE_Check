import styles from "./Button.module.css";

const Button = ({ buttonText, onClick }) => {
  return (
    <div className={styles.button}>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Button;

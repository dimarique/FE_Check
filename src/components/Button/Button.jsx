import styles from "./Button.module.css";

const Button = ({ buttonText, onClick }) => {
  return (
    <div className={styles.btn} onClick={onClick}>
      {buttonText}
    </div>
  );
};

export default Button;

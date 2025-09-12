import "./App.css";
import { useState } from "react";
import data from "./data/fe_questions_complete.json";
import Question from "./Question/Question";
import Answer from "./Answer/Answer";
import Button from "./Button/Button";

function App() {
  const [index, setIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIndex(Math.floor(Math.random() * data.length));
    setIsVisible(false);
  };

  return (
    <>
      <Question text={data[index].question} />
      <Answer
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        text={data[index].answer}
      />
      <Button
        buttonText={"❤️"}
        setIsVisible={setIsVisible}
        onClick={handleButtonClick}
      />
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import data from "./data/fe_questions_complete.json";
import Question from "./Question/Question";
import Answer from "./Answer/Answer";
import Button from "./Button/Button";
import Id from "./Id/Id";

function App() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * data.length),
  );
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIndex(Math.floor(Math.random() * data.length));
    setIsVisible(false);
  };

  return (
    <>
      <Id text={data[index].id} />
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

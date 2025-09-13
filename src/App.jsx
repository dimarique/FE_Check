import "./App.css";
import { useState } from "react";
import data1 from "./data/fe_questions_15_30.json";
import data2 from "./data/fe_questions_30_43.json";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Button from "./components/Button/Button";
import Id from "./components/Id/Id";

function App() {
  const allData = [...data1, ...data2];
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * allData.length),
  );
  const [isVisible, setIsVisible] = useState(false);
  const handleButtonClick = () => {
    setIndex(Math.floor(Math.random() * allData.length));
    setIsVisible(false);
  };

  return (
    <>
      <Id text={allData[index].id} />
      <Question
        text={allData[index].question}
        tag={allData[index].difficulty}
      />
      <Answer
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        text={allData[index].answer}
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

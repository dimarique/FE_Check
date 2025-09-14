import "./App.css";
import { useState } from "react";
import data1 from "./data/fe_questions_1_15.json";
import data2 from "./data/fe_questions_15_30.json";
import data3 from "./data/fe_questions_30_43.json";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import Button from "./components/Button/Button";
import Id from "./components/Id/Id";

function App() {
  const allData = [...data1, ...data2, ...data3];
  const randomCard = () => Math.floor(Math.random() * allData.length);
  const [index, setIndex] = useState(() => randomCard());
  const [isVisible, setIsVisible] = useState(false);
  const cardNumber = allData[index];
  console.log(allData);
  const handleButtonClick = () => {
    setIndex(randomCard());
    setIsVisible(false);
  };

  return (
    <>
      <Id text={cardNumber.id} />
      <Question text={cardNumber.question} tag={cardNumber.difficulty} />
      <Answer
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        text={cardNumber.answer}
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

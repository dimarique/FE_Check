import './App.css';
import { useState } from 'react';
import en_data1 from './data/en_questions_001-100.json';
import en_data2 from './data/en_questions_101-232.json';
import en_data3 from './data/en_questions_233-360.json';
import Question from './components/Question/Question';
import Answer from './components/Answer/Answer';

function App() {
  const allData = [...en_data1, ...en_data2, ...en_data3];

  const randomCard = () => Math.floor(Math.random() * allData.length);

  const [index, setIndex] = useState(() => randomCard());

  const [isVisible, setIsVisible] = useState(false);

  const cardNumber = allData[index];

  const handleButtonClick = () => {
    setIndex(randomCard());
    setIsVisible(false);
  };

  return (
    <>
      <Question id={cardNumber.id} setIsVisible={setIsVisible} text={cardNumber.question} tag={cardNumber.difficulty} />
      <Answer setIsVisible={setIsVisible} isVisible={isVisible} text={cardNumber.answer} onClick={handleButtonClick} />
    </>
  );
}

export default App;

import React from "react";
import "..//src/App.scss";
import { questions } from "./Questions.js";
import Game from "./Game";
import Result from './Result.js'



function App() {
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  // console.log(question);

  const lineResult = Math.round((step / questions.length) * 100);
  
  const [correct, setCorrect] = React.useState(0);

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} lineResult={lineResult}  />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;

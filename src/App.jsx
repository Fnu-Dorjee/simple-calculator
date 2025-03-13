
import { useState } from "react";

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
});

const inputIsValid = userInput.duration >= 1;
function handleChange(inputIdentifier, newValue){
  setUserInput(preUserInput => {
      return {
          ...preUserInput,
          [inputIdentifier]: +newValue
      }
  });
}
  return (
    <>
    <Header/>
    <UserInput onChangeHandle={handleChange} userInputs={userInput}/>
    { inputIsValid  && <Results userInputs={userInput}/>}
    {!inputIsValid && <p className="center">
      Duaration can't be less than a year! You entered {" "}
      <span style={{color:"red"}}>{userInput.duration}</span>
      </p>}
    </>
  );
}

export default App

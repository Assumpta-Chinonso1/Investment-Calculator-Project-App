 import { useState } from "react"
 import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"


function  App () {
  const [userInput, setUserInput] = useState({
    initialInvestment: 120000,
    annualInvestment: 10000,
    expectedReturn: 8,
    duration: 12
})

const inputIsValid = userInput.duration >= 1

function handleChange(inputIdentifier, newValue) {
    setUserInput(prevValue => {
        return {
            ...prevValue,
            [inputIdentifier]: +newValue
        }
})
}
  

  return (
    <>
          <Header/>
        <UserInput userInput={userInput} onChangeInput={handleChange}/>

    {!inputIsValid && <p className="center">Please input a duration greater than zero</p>}
      {inputIsValid && <Result input={userInput}/>}
          </>

  )
}

export default App

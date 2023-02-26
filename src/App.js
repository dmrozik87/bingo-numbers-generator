import "./App.css";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [index, setIndex] = useState(0);
  const [howManyNumbers, setHowManyNumbers] = useState(0);
  const [delay, setDelay] = useState(1000);

  function createRandomNumbersArray() {
    const randomNumbersArray = [];
    while (randomNumbersArray.length < howManyNumbers) {
      let newNumber = Math.floor(Math.random() * howManyNumbers) + 1;
      if (!randomNumbersArray.includes(newNumber)) {
        randomNumbersArray.push(newNumber);
      }
    }
    return randomNumbersArray;
  }

  function handleClick() {
    setNumbers([]);
    setIndex(0);
    let counter = 0;
    setNumbers(createRandomNumbersArray());
    let id = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
      counter++;
      if (counter > howManyNumbers) clearInterval(id);
    }, delay);
  }

  function handleNumberQuantityChange(event) {
    setHowManyNumbers(event.target.value);
  }

  function handleIntervalChange(event) {
    setDelay(event.target.value*1000)
  }

  return (
    <div className="App">
      <div className="inputField">
        <label htmlFor="howManyNumbers">How many numbers does your Bingo have?</label>
        <input type="number" name="howManyNumbers" onChange={handleNumberQuantityChange}></input>
        <label htmlFor="howManyNumbers">How many seconds should pass between the numbers?</label>
        <input type="number" name="interval" onChange={handleIntervalChange}></input>
      </div>
      <button onClick={handleClick}>START</button>
      <div className="display">
        <h1>{numbers[index]}</h1>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [index, setIndex] = useState(0);
  const [howManyNumbers, setHowManyNumbers] = useState(0);

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
    }, 500);
  }

  function handleChange(event) {
    setHowManyNumbers(event.target.value);
  }

  return (
    <div className="App">
      <div className="inputField">
        <label htmlFor="howManyNumbers">Ile liczb ma Twoje Bingo?</label>
        <input type="number" name="howManyNumbers" onChange={handleChange}></input>
      </div>
      <button onClick={handleClick}>Start</button>
      <div className="display">
        <h1>{numbers[index]}</h1>
      </div>
    </div>
  );
}

export default App;

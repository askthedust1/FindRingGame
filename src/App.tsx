import React, {useState} from 'react';
import Title from "./components/tite/Title";
import ResetBtn from "./components/ResetBtn/ResetBtn";
import CountTry from "./components/CountTry/CountTry";
import Squares from "./components/Squares/Squares";
import './App.css';

function App() {

  const createItems = () => {
    const arr = [];

    for (let i = 0; i < 36; i++) {
      const info = {hasItem: false, clicked: false, id: i};
      arr.push(info);
    }

    let random = Math.floor(Math.random() * 36);
    arr[random] = {hasItem: true, clicked: false, id: random};

    return arr;
  };

  const [items, setItems] = useState(createItems());
  const [count, setCount] = useState(0);
  const [win, setWin] = useState([{text: '', win: false}]);


  const clicked = (id: number) => {
    const itemsCopy = [...items];
    const index = items.findIndex(item => item.id === id);
    const itmCopy = { ...itemsCopy[index] };
    itmCopy.clicked = true;
    itemsCopy[index] = itmCopy;
    setItems(itemsCopy);
    setCount(count + 1);

    if (itmCopy.hasItem === true) {
      const winCopy = [...win];
      let wCopy = { ...winCopy[0] };
      wCopy = {text: 'You win!', win: true};
      winCopy[0] = wCopy;
      setWin(winCopy);
      setCount(count);
    }
  };

  const reset = () => {
    setItems(createItems());
    const winCopy = [...win];
    let wCopy = { ...winCopy[0] };
    wCopy = {text: '', win: false};
    winCopy[0] = wCopy;
    setWin(winCopy);
    setCount(0);
  };


  return (
    <div className="App">
      <div className={win[0].text ? 'blocked' : 'wrap' }>
        <Squares items={items} clicked={clicked}/>
      </div>
      <Title text={win[0].text}/>
      <ResetBtn resetGame={() => reset()}/>
      <CountTry number={count} />
    </div>
  );
}

export default App;

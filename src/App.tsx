import React, {useState} from 'react';
import './App.css';
import Square from "./components/square/Square";
import Title from "./components/tite/Title";
import ResetBtn from "./components/ResetBtn/ResetBtn";


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


  const clicked = (id: number) => {
    const itemsCopy = [...items];
    const index = items.findIndex(item => item.id === id);
    const itmCopy = { ...itemsCopy[index] };
    itmCopy.clicked = true;
    itemsCopy[index] = itmCopy;
    setItems(itemsCopy);
    setCount(count + 1);
    if (itmCopy.hasItem === true) {
      console.log('You win!');
    }
    console.log(items);
  }

  return (
    <div className="App">
      <div className="wrap">
        {items.map(item => {
          return <Square
              key={item.id}
              squareClass={item.clicked ? 'test' : 'square'}
              onChangeSquare={() => clicked(item.id)}
              ring={item.hasItem ? 'ring' : ''}
              hide={item.clicked && item.hasItem ? ' ' : 'hide'}
          />
        })}
      </div>
      {/*<ResetBtn resetGame={() => }/>*/}
      <span>Количество попыток: {count}</span>
    </div>
  );
}

export default App;

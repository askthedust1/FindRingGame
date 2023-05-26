import React, {useState} from 'react';
import './App.css';
import Square from "./components/square/Square";



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

  const clicked = (id: number) => {
    const itemsCopy = [...items];
    const index = items.findIndex(item => item.id === id);
    const itmCopy = { ...itemsCopy[index] };
    itmCopy.clicked = true;
    itemsCopy[index] = itmCopy;
    setItems(itemsCopy);
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
          />
        })}
      </div>
    </div>
  );
}

export default App;

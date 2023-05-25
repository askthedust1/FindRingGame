import React, {useState} from 'react';
import './App.css';

function App() {

  const createItems = () => {
    const arr = [];

    for (let i = 0; i < 36; i++) {
      const info = {hasItem: false, clicked: false, id: i};
      arr.push(info);
    }

    let random = Math.floor(Math.random() * 36);
    arr[random] = {hasItem: true, clicked: false, id: random}

    console.log(arr);
  };

  const [items, setItems] = useState(createItems());


  return (
    <div className="App">
    </div>
  );
}

export default App;

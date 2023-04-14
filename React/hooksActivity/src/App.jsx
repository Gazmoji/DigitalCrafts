import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCounter] = useState(0);
  const [statement, setBoolean] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    randomAPI();
  }, []);

  const randomAPI = async () => {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
    );
    const result = await response.json();
    setList(result);
  };

  const listingItems = list.map((items) => {
    return (
      <li>
        <h1>{items.title}</h1>
        <p>{items.price}</p>
        <p>{items.description}</p>
        <img src={items.images[0]} />
      </li>
    );
  });

  const trueOrFalse = () => {
    setBoolean(!statement);
  };

  const increaseValue = () => {
    setCounter(count + 1);
  };

  const decreaseValue = () => {
    setCounter(count - 1);
  };

  return (
    <>
      {listingItems}
      <h1>This is the Counter!!</h1>
      <p>{count}</p>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
      <button onClick={trueOrFalse}>{statement ? "OFF" : "ON"}</button>
    </>
  );
}

export default App;

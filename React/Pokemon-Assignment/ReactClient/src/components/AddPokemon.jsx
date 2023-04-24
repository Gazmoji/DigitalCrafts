import { useState, useEffect } from "react";

function AddPokemon(props) {
  const [pokemon, setPokemon] = useState({});

  const inputValue = async (e) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  };

  const sendPokemon = async () => {
    const response = await fetch("http://localhost:8080/mainpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    });
    const savedPokemon = await response.json();
    if (savedPokemon) {
      props.loadCallback();
    } else {
      console.log("There was an error.");
    }
  };
  

  return (
    <>
      <h1>Add A Pokemon Here</h1>
      <input
        type="text"
        placeholder="Enter Pokemon Name"
        name="name"
        onChange={inputValue}
      />
      <input
        type="text"
        placeholder="Enter Pokemon Type"
        name="type"
        onChange={inputValue}
      />
      <input
        type="text"
        placeholder="Enter Pokemon Image URL"
        name="imageurl"
        onChange={inputValue}
      />
      <button onClick={sendPokemon}>Add Pokemon</button>
    </>
  );
}

export default AddPokemon;

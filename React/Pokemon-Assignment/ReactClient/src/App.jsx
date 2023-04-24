import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AddPokemon from "./components/AddPokemon";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadUsers = async () => {
    const response = await fetch("http://localhost:8080/register");
    const users = await response.json();
    setUsers(users);
  };

  const loadPokemon = async () => {
    const response = await fetch("http://localhost:8080/mainpage");
    const pokemon = await response.json();
    setPokemon(pokemon);
  };

  const showPokemon = pokemon.map((information) => {
    return (
      <li key={information.id}>
        <h1>{information.name}</h1>
        <p>{information.type}</p>
        <img src={information.imageurl} />
      </li>
    );
  });

  return (
    <>
      <h1>hey!</h1>
      <AddPokemon loadCallback={loadPokemon} />
      <ul>{showPokemon}</ul>
    </>
  );
}



export default App;


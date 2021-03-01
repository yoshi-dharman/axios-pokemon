import axios from "axios";
import { useEffect, useState } from "react";

import './App.css';

function App() {

  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/pikachu")
      // .then((response) => console.log(response));
      .then((response) => setPokemon(response.data))
      .catch(err => "ada error : "+err);
      
  }, []);

  return (
    <>
      {pokemon === ""
      ? <div>Loading...</div>
      : <div className="App">
          <h1>Pokemon Info</h1>
          <div className="pokemon-main">
            <div className="pokemon-bio">
              <img src={pokemon.sprites.other.dream_world.front_default} alt="Pikachu"></img>
            </div>
            <div className="pokemon-bio">
              <h2>Data</h2>
              <hr></hr>
              <div className="pokemon-data">
                <p>Name : {pokemon.species.name}</p>
                <p>Type : {pokemon.types[0].type.name}</p>
                <p>Height : {pokemon.height}</p>
                <p>Weight : {pokemon.weight}</p>
                {pokemon.abilities.map((item,index) => {
                    return (
                      <p key={index} >Abilities {index +1} : {item.ability.name}</p>
                    )
                })}
                <ul> All Move :
                  {pokemon.moves.map((item,index) => {
                      return (
                        <li key={index}>{item.move.name}</li>
                      )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    </>
    
  );
}

export default App;

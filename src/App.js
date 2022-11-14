import { useState } from "react";
import PokedexList from "./PokedexList";
import PokemonList from "./PokemonList";
import PokemonDetails from "./pokemonDetails";
function App() {
  const [selectedPokedex, setSelectedPokedex] = useState(null);
  const [pokemon, setPokemon] = useState(null);


  function onSelectPokedex(newPokedex) {
    setSelectedPokedex(newPokedex);

  }
  
  function onPokemon(newPokemon) {
    setPokemon(newPokemon);

  }
  
  function onHome() {
    onSelectPokedex(null);
    onPokemon(null);
  }

  function renderButtons(){
    return <div>
      <button onClick={onHome}>Home</button>
      {/* placeholder for req. 10 */}
    </div>
  }

  if (selectedPokedex === null) {
    return <PokedexList selectPokedex={onSelectPokedex} />;
  }

  if (pokemon === null) {
    return <div> 
      {renderButtons()}
      <PokemonList pokedexName={selectedPokedex} selectPokemon = {onPokemon} />
      </div>;
  }

  return (
    <div className="App">
      {renderButtons()}
      <PokemonDetails pokemonName={pokemon} />

    </div>
  );
}

export default App;

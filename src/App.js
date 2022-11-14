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

  if (selectedPokedex === null) {
    return <PokedexList selectPokedex={onSelectPokedex} />;
  }

  if (pokemon === null) {
    return <PokemonList pokedexName={selectedPokedex} selectPokemon = {onPokemon} />;
  }

  return (
    <div className="App">
      <PokemonDetails pokemonName={pokemon} />

    </div>
  );
}

export default App;

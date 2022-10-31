import { useState } from "react";
import PokedexList from "./PokedexList";
import PokemonList from "./PokemonList";

function App() {
  const [selectedPokedex, setSelectedPokedex] = useState(null);


  function onSelectPokedex(newPokedex) {
    setSelectedPokedex(newPokedex);

  }
  

  if (selectedPokedex === null) {
    return <PokedexList selectPokedex={onSelectPokedex} />;
  }

  return (
    <div className="App">
      <PokemonList pokedexName={selectedPokedex} />
    </div>
  );
}

export default App;

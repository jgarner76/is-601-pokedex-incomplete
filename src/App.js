import { useState } from 'react';
import PokedexList from './PokedexList';

function App() {
  const [selectedPokedex, setSelectedPokedex] = useState(null);

  if (selectedPokedex === null) {
    return <PokedexList />;
  }

  return (
    <div className="App">
      Have not implemented this yet!
    </div>
  );
}

export default App;

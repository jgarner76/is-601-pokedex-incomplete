import { useState } from "react";
import PokedexList from "./PokedexList";

function App() {
  const [selectedPokedex, setSelectedPokedex] = useState(null);

  /***
   * TODO #1 - create a helper function that will take in a pokedex
   * name as a string and update the selectedPokedex hook with
   * the new value.
   *
   * Named: selectPokedex
   *
   * Please look at this example from typerace on how to do that!
   *
   * function chooseSnippet(selectedSnippet) {
   *   setSnippet(selectedSnippet);
   *   setGameState({
   *     ...initialGameState,
   *     startTime: new Date().getTime(),
   *   })
   * }
   *
   * change this
   */

  if (selectedPokedex === null) {
    /***
     * TODO #2 - We need to pass the helper function to this
     * new component as a prop.
     *
     * Please look at this example from typerace on how to do that!
     * pst. chooseSnippet
     *
     * <SnippetSelector films={films} chooseSnippet={chooseSnippet} />
     */
    return <PokedexList />;
  }

  return (
    <div className="App">
      This text will render when you have successfully implemented all the 5
      different TODOs.
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';

/***
 * TODO #3 - update the function signature to have props
 * 
 * Please look at this example from typerace on how to do that!
 * 
 * function SnippetSelector(props) { ... }
 */
function PokedexList() {
    /***
     * TODO #4 - pull out of the new prop selectPokedex from the param
     * 
     * Please look at this example from typerace on how to do that!
     * 
     * const { films, chooseSnippet } = props;
     */
    const [hasError, setErrors] = useState(null);
    const [pokedexes, setPokedexes] = useState([]);

    useEffect(function () {
        async function fetchData() {
            try {
                // type should be { next: string; previous: string | null, results: Pokedex[]}
                const pokedexs = await new Pokedex().getPokedexsList()
                setPokedexes(pokedexs.results);
            }
            catch (error) {
                setErrors(error)
            }
        }
        fetchData();
    }, []);

    if (hasError !== null) {
        return <p>An error has occurred.</p>
    }

    function renderPokdexes() {
        return pokedexes.map((pokedexData) => {
            const { name } = pokedexData;
            /***
             * TODO #5 - update the code below to call the new prop with the name
             * of the pokedex when the button is clicked. 
             * 
             * Please look at this example from typerace on how to do that!
             * 
             * <button key={id} onClick={() => onSelection(title)}>{title}</button>
             */
            return <li>{name} <button>View</button></li>
        })
    }

    return <ul>{renderPokdexes()}</ul>;
}

export default PokedexList;

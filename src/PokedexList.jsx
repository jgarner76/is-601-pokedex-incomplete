import React, { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';

function PokedexList() {
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
            return <li>{name} <button>View</button></li>
        })
    }

    return <ul>{renderPokdexes()}</ul>;
}

export default PokedexList;

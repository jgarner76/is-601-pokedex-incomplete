import React, { useState, useEffect } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';



function PokedexList(props) {

    const {selectPokedex} = props
    const [hasError, setErrors] = useState(null);
    const [pokedexes, setPokedexes] = useState([]);

    useEffect(function () {
        async function fetchData() {
            try {
            
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
            return <li key={name}>{name} <button onClick={() => selectPokedex(name)}>View</button></li>

        })
    }

    return <ul>{renderPokdexes()}</ul>;
}

export default PokedexList;

import { useState, useEffect } from "react";
import { Pokedex } from 'pokeapi-js-wrapper';

function PokemonList(props) {
    const { pokedexName,selectPokemon } = props;
    const [pokemon, setPokemon] = useState([]);
    const [hasError, setErrors] = useState(null);

    useEffect(function () {
        async function fetchData() {
            try {
            
                const pokedex = await new Pokedex().getPokedexByName(pokedexName)
                setPokemon(pokedex.pokemon_entries.map(function (entry) {
                    const { pokemon_species } = entry;
                    return pokemon_species.name;
                }));
            }
            catch (error) {
                // TODO
                setErrors(error)
                
            }
        }
        fetchData();
        
    }, [pokedexName]);
    if (hasError !== null) {
        return <p>An error has occurred.</p>
    }
    function renderPokemon() {
        return pokemon.map((pokemonName) => {
            return <li key={pokemonName}>{pokemonName} <button onClick = {() => selectPokemon (pokemonName)}>View Details</button></li>
        });
    }

    return <ul>{renderPokemon()}</ul>;
}

export default PokemonList;

import { useState, useEffect } from "react";
import { Pokedex } from 'pokeapi-js-wrapper';

function PokemonList(props) {
    const { pokedexName } = props;
    const [pokemon, setPokemon] = useState([]);

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
                //setErrors(error)
                throw error;
            }
        }
        fetchData();
    }, [pokedexName]);

    function renderPokemon() {
        return pokemon.map((pokemonName) => {
            return <li key={pokedexName}>{pokemonName} <button>View Details</button></li>
        });
    }

    return <ul>{renderPokemon()}</ul>;
}

export default PokemonList;
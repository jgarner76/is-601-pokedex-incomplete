import { Pokedex } from "pokeapi-js-wrapper";
import { useState, useEffect } from "react"


function PokemonDetails(props) {

    const {pokemonName} = props
    const [pokemonDetail, setpokemonDetail] = useState(null);
    const [hasError, setErrors] = useState(null);

    useEffect(function() {
        async function fetchData(){
            try {

                const pokemonDetail = await new Pokedex().getPokemonByName(pokemonName)
                setpokemonDetail(pokemonDetail);
            }
            catch (error) {
                setErrors(error)
            }
        }
        fetchData();

    }, [pokemonName]);

    if (hasError !== null) {
        return <p>An error has occurred</p>
    }

    function renderAbilities() {
        const abilities = pokemonDetail.abilities; // TODO
        return abilities.map(({ability}) => {
            return <li key={ability.name}>{ability.name}</li>
        })
    }
    function renderTypes(){
        const types = pokemonDetail.types;
        return types.map(({type}) => {
            return <li key={type.name}>{type.name}</li>
        })
    }
    function renderStats(){
        const stats = pokemonDetail.stats;
        return stats.map(({stat, base_stat}) => {
            return <li key={stat.name}><strong>{stat.name}:</strong> {base_stat}</li>
        })
    }
    function renderPokemonDetails() {
        if (pokemonDetail == null){
            return "Loading"
        }
        return <div>
            <h2>{pokemonDetail.name}</h2>
            <img src={pokemonDetail.sprites.front_default} />
            <h3>Abilities</h3>
            <ul>{renderAbilities()}</ul>
            <h3>Types</h3>
            <ul>{renderTypes()}</ul>
            <h3>Stats</h3>
            <ul>{renderStats()}</ul>
        </div>

    }

    return <div>{renderPokemonDetails()}</div>;
}

export default PokemonDetails;
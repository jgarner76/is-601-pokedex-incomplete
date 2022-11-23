import { render, screen, within } from '@testing-library/react';
import PokemonDetails from './pokemonDetails';
import { Pokedex } from 'pokeapi-js-wrapper';

jest.mock('pokeapi-js-wrapper');

describe('PokemonList', () => {
    const mockPokemon =  {
        "abilities": [
          {
            "ability": {
              "name": "limber"
            }
          },
          {
            "ability": {
              "name": "imposter"
            }
          }
        ],
        "name": "ditto",
        "sprites": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        },
        "stats": [
          {
            "base_stat": 48,
            "stat": {
              "name": "hp"
            }
          },
          {
            "base_stat": 48,
            "stat": {
              "name": "attack"
            }
          }
        ],
        "types": [
          {
            "type": {
              "name": "normal"
            }
          }
        ]
      };

    beforeEach(() => {
        Pokedex.mockReturnValue({
            getPokemonByName: jest.fn().mockResolvedValue(mockPokemon)
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('that the pokedexes render on the screen', async () => {
        // Arrange
        const pokemonName ='Test Pokemon';

        // Act
        render(<PokemonDetails pokemonName={pokemonName} />);

        // Assert
        expect(await screen.findByText(mockPokemon.name)).toBeInTheDocument();
        expect(await screen.findByText(mockPokemon.abilities[0].ability.name)).toBeInTheDocument();
        expect(await screen.findByText(mockPokemon.abilities[1].ability.name)).toBeInTheDocument();
        expect(await screen.findByText(mockPokemon.types[0].type.name)).toBeInTheDocument();
        
        const hpStat = await screen.findByText(mockPokemon.stats[0].stat.name+":");
        expect(hpStat).toBeInTheDocument();
        expect(within(hpStat.parentNode).getByText(mockPokemon.stats[0].base_stat));

        const Attack = await screen.findByText(mockPokemon.stats[1].stat.name +":");
        expect(Attack).toBeInTheDocument();
        expect(within(Attack.parentNode).getByText(mockPokemon.stats[1].base_stat));
        
        expect(await screen.findByAltText(`${mockPokemon.name} Sprite`)).toBeInTheDocument();
    });
});
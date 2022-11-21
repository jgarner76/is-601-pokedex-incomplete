import { render, screen, within } from '@testing-library/react';
import PokemonList from './PokemonList';
import { Pokedex } from 'pokeapi-js-wrapper';

jest.mock('pokeapi-js-wrapper');

describe('PokemonList', () => {
    const mockPokemon =  [
        { pokemon_species: { name: 'mock 1' } },
        { pokemon_species: { name: 'test 2' } },
    ];

    beforeEach(() => {
        Pokedex.mockReturnValue({
            getPokedexByName: jest.fn().mockResolvedValue({
                pokemon_entries: mockPokemon,
            })
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('that the pokedexes render on the screen', async () => {
        // Arrange
        const mockSelectPokemon = jest.fn();
        const pokedexName ='Test Pokemon';

        // Act
        render(<PokemonList pokedexName={pokedexName} selectPokemon={mockSelectPokemon} />);

        // Assert
        await Promise.all(mockPokemon.map(async ({ pokemon_species: { name } }) => {
            const pokedexListItem = await screen.findByText(name)
            expect(pokedexListItem).toBeInTheDocument();
            expect(within(pokedexListItem).getByText('View Details')).toBeInTheDocument();
        }));
    });
});
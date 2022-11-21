import { render, screen, within } from '@testing-library/react';
import PokedexList from './PokedexList';
import { Pokedex } from 'pokeapi-js-wrapper';

jest.mock('pokeapi-js-wrapper');

describe('PokedexList', () => {
    const mockPokdexs =  [{ name: 'national' }, { name: 'kanto' }];

    beforeEach(() => {
        Pokedex.mockReturnValue({
            getPokedexsList: jest.fn().mockResolvedValue({
                results: mockPokdexs,
            })
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('that the pokedexes render on the screen', async () => {
        // Arrange
        const mockSelectPokedex = jest.fn();

        // Act
        render(<PokedexList selectPokedex={mockSelectPokedex} />);

        // Assert
        await Promise.all(mockPokdexs.map(async ({ name }) => {
            const pokedexListItem = await screen.findByText(name)
            expect(pokedexListItem).toBeInTheDocument();
            expect(within(pokedexListItem).getByText('View')).toBeInTheDocument();
        }));
    });
});
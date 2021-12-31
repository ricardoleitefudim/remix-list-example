import { Link } from 'remix';

import type { PokemonList } from './types';

export const Pokemons = ({ pokemons }: PokemonList) => (
  <ul role="list" className="inline-flex flex-wrap">
    {pokemons.map((pokemon) => (
      <li className="ml-4 mt-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
        <Link to={`/pokemons/${pokemon.name}`}>
          <span>{pokemon.name}</span>
        </Link>
      </li>
    ))}
  </ul>
);

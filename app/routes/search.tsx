import { json } from 'remix';
import type { LoaderFunction } from 'remix';

import { getAllPokemons } from '~/api';
import { PokemonProp } from '~/components/pokemons/types';

export const loader: LoaderFunction = async ({ request }) => {
  const query = (new URL(request.url).searchParams.get('q') ?? '').toLocaleLowerCase();

  const { results } = await getAllPokemons({ limit: 151 });

  return json(results.filter(({ name }: PokemonProp) => name.toLocaleLowerCase().includes(query)));
};

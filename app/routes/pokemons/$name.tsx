import { Outlet, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import { getPokemon } from '~/api';
import { PokemonCard } from '~/components/pokemons';

export function ErrorBoundary({ error }) {
  return (
    <>
      <h3>Whoops. Something went wrong Pokemon name</h3>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
}

export const loader: LoaderFunction = async ({ params }) => {
  return {
    pokemon: await getPokemon(params?.name || ''),
  };
};

export default function () {
  const { pokemon } = useLoaderData();

  return (
    <div className="flex">
      <PokemonCard pokemon={pokemon} />
      <Outlet />
    </div>
  );
}

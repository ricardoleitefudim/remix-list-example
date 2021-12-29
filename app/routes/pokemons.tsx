import { useMemo } from 'react';
import { Outlet, useFetcher } from 'remix';
import { Pokemons } from '~/components/pokemons';

export function ErrorBoundary({ error }: any) {
  return (
    <>
      <h3>Whoops. Something went wrong [Pokemons]</h3>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
}

export default function PokemonsRoute() {
  const pokemon = useFetcher();

  const pokemonList = useMemo(() => pokemon.data, [pokemon.data]);

  return (
    <main>
      <div className="flex">
        <div className="w-2/3">
          <pokemon.Form method="get" action="/search">
            <div className="flex justify-center pt-20">
              <div>
                <img
                  className="w-2/3 ml-auto mr-auto mb-6"
                  src="https://pbs.twimg.com/profile_images/1409773636970450954/UltUJdMr_400x400.png"
                />
                <div className="flex border border-gray-200 rounded-full p-4 shadow text-xl">
                  <input
                    type="search"
                    name="q"
                    className="w-full outline-none px-3"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button className="" type="submit" id="button-addon2">
                    <img
                      className="rounded-full w-24"
                      src="https://i.pinimg.com/474x/c0/5e/fe/c05efe732cc3e12bc4ee0c58b3c12268.jpg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </pokemon.Form>
          {/* Using the child route allows to render info in the same page */}
          <Outlet />
        </div>
        {pokemonList?.length ? (
          <div className="w-1/3">
            <Pokemons pokemons={pokemonList} />
          </div>
        ) : null}
      </div>
    </main>
  );
}

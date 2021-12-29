import join from 'proper-url-join';

export const API_URL = 'https://pokeapi.co/api/v2/';

type search = {
  limit: number;
};

export const getAllPokemons = async ({ limit = 10 }: search) => {
  const res = await fetch(join(API_URL, 'pokemon', `?limit=${limit}`));

  return res.json();
};

export const getPokemon = async (name: string) => {
  const res = await fetch(join(API_URL, 'pokemon', name));

  return res.json();
};

export const getPokemonForm = async (id: number) => {
  const res = await fetch(join(API_URL, 'pokemon-form', id));

  return res.json();
};

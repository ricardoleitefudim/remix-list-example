type SimpleProp = {
  name: string;
  url: string;
};

export type PokemonProp = {
  name: string;
  sprites: any;
  forms: SimpleProp[];
  base_experience: number;
  weight: number;
  height: number;
};

export interface PokemonObject {
  pokemon: PokemonProp;
}

type PokemonSearch = SimpleProp;

export interface PokemonList {
  pokemons: PokemonSearch[];
}

import { Link } from 'remix';

import join from 'proper-url-join';

import type { PokemonProp, PokemonObject } from './types';

const getFormUrl = ({ forms, name }: PokemonProp) => {
  const urlForm = forms[0]?.url || '';

  var output = urlForm.split('/');

  const formId = output[output.length - 2];
  return join('pokemons', name, formId);
};

export const PokemonCard = ({ pokemon }: PokemonObject) => (
  <div className="bg-gray-100 w-1/2 p-4 mt-20">
    <figure className="flex justify-center rounded-xl p-8 md:p-0 dark:bg-gray-800">
      <img
        className="inline-block w-24 h-24 rounded-full ring-2 ring-white"
        src={pokemon.sprites.front_default}
        alt=""
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption className="font-medium">
          <div className="text-gray-700 dark:text-gray-500">{pokemon.name}</div>
        </figcaption>
      </div>
    </figure>
    <div className="p-3">
      <table className="p-3 w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Base Experience
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Height
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Weight
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{pokemon.base_experience}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pokemon.height}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pokemon.weight}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-5 flex justify-center">
        <Link to={getFormUrl(pokemon)}>View forms</Link>
      </div>
    </div>
  </div>
);

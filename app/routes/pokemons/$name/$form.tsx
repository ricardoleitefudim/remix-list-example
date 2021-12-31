import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import { getPokemonForm } from '~/api';

export const loader: LoaderFunction = async ({ params }) => {
  return {
    form: await getPokemonForm(params.form),
  };
};

const FormRoute = () => {
  const { form } = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-4 auto-rows-min w-1/2 p-4 pt-20">
      {Object.entries(form?.sprites).map(
        (sprite) =>
          sprite[1] && (
            <figure className="text-center mb-2 p-2  dark:bg-gray-800 ring-1 ring-gray-300">
              <img
                className="inline-block w-24 h-24 mt-4 rounded-full ring-2 ring-gray-200"
                src={sprite[1] ?? ''}
                alt=""
              />
              <div className="pt-6 text-center space-y-4">
                <figcaption className="font-medium">
                  <div className="text-gray-700 dark:text-gray-500">{sprite[0]}</div>
                </figcaption>
              </div>
            </figure>
          )
      )}
    </div>
  );
};

export default FormRoute;

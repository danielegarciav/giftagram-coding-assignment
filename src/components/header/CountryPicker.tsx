import { Popover, Transition } from '@headlessui/react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { FC, Fragment, useState } from 'react';

interface Country {
  id: number;
  name: string;
}

const countries: Country[] = [
  {
    id: 0,
    name: 'Canada',
  },
  {
    id: 1,
    name: 'United States',
  },
];

export const CountryPicker: FC = () => {
  const [country, setCountry] = useState(countries[0]);

  const setCountryAndClose = (country: Country, close: () => void) => {
    setCountry(country);
    close();
  };

  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button className="flex items-center min-w-[172px] max-w-[172px] text-cyan-600 text-left">
            <LocationMarkerIcon className="w-8 mr-2" />
            <span>
              Deliver to recipient <br /> in <b>{country.name}</b>
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-20 w-screen max-w-xs px-4 mt-3">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative flex flex-col gap-8 bg-white p-7 lg:grid-cols-2">
                  {countries.map(country => (
                    <a
                      onClick={() => setCountryAndClose(country, close)}
                      key={country.id}
                      href="#"
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
                    >
                      <p className="text-sm font-medium text-gray-900">{country.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

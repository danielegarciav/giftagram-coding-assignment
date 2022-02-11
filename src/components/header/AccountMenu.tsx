import { Popover, Transition } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon, UserCircleIcon } from '@heroicons/react/solid';
import { FC, Fragment } from 'react';

interface MenuItem {
  label: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { label: 'Help', url: '#' },
  { label: 'Orders', url: '#' },
  { label: 'Profile', url: '#' },
  { label: 'Logout', url: '#' },
];

export const AccountMenu: FC = () => {
  return (
    <Popover>
      {({ open, close }) => {
        const ChevronIcon = open ? ChevronUpIcon : ChevronDownIcon;
        return (
          <>
            <Popover.Button className="flex flex-row items-center select-none text-left">
              <UserCircleIcon className="mr-1 w-8" />
              <span className="whitespace-nowrap">Daniel's Account</span>
              <ChevronIcon className="ml-1 w-5" />
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
              <Popover.Panel className="absolute right-0 z-20 w-screen max-w-xs px-4 mt-3">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative flex flex-col gap-8 bg-white p-7 lg:grid-cols-4">
                    {menuItems.map((item, index) => (
                      <a
                        onClick={() => close}
                        key={index}
                        href="#"
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
                      >
                        <p className="text-sm font-medium text-gray-900">{item.label}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        );
      }}
    </Popover>
  );
};

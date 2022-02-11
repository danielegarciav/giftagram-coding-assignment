import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { FC, Fragment } from 'react';

interface Category {
  label: string;
  url: string;
}

// Extracted from https://api.giftagram.com/api/categories?location=3
const categories: Category[] = [
  { label: 'New Arrivals', url: '#' },
  { label: 'Giftboxes', url: '#' },
  { label: "Valentine's Day", url: '#' },
  { label: 'All', url: '#' },
  { label: 'Best Sellers', url: '#' },
  { label: 'Plants & Flowers', url: '#' },
  { label: 'Barware', url: '#' },
  { label: '$100+', url: '#' },
  { label: 'Client & Employee Gifts', url: '#' },
  { label: 'Sweets', url: '#' },
  { label: 'Books & Games', url: '#' },
  { label: '$50-100', url: '#' },
  { label: 'Personalized Gifts', url: '#' },
  { label: 'Gourmet', url: '#' },
  { label: 'Tech & Gadgets', url: '#' },
  { label: 'Under $50', url: '#' },
  { label: 'Kids', url: '#' },
  { label: 'Kitchenware', url: '#' },
  { label: 'Home', url: '#' },
  { label: 'Gift Cards', url: '#' },
  { label: 'Babies', url: '#' },
  { label: 'Apothecary', url: '#' },
  { label: 'Toronto Gifts', url: '#' },
  { label: 'Accessories', url: '#' },
];

export const CategoryPicker: FC = () => (
  <Popover>
    {({ open, close }) => {
      const ChevronIcon = open ? ChevronUpIcon : ChevronDownIcon;
      return (
        <>
          <Popover.Button className="flex items-center max-w-[84px] text-left">
            <span>Shop by Category</span>
            <ChevronIcon className="ml-1 w-14" />
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
            <Popover.Panel className="absolute left-0 z-20 w-screen px-4 mt-3">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-4">
                  {categories.map((category, index) => (
                    <a
                      onClick={() => close}
                      key={index}
                      href="#"
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
                    >
                      <p className="text-sm font-medium text-gray-900">{category.label}</p>
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

import { SearchIcon } from '@heroicons/react/solid';
import { FC } from 'react';

export const SearchBar: FC = () => {
  return (
    <div className="flex items-center mr-auto w-full max-w-xl h-full px-4">
      <div className="flex items-center rounded shadow-sm w-full px-4 py-2 transition-colors duration-200 shadow-neutral-300 bg-neutral-100 text-neutral-500 hover:bg-white focus-within:bg-white focus-within:text-black">
        <input
          type="text"
          className="w-full mr-2 rounded bg-transparent outline-none focus-visible:outline"
          placeholder="Search Giftagram"
        />
        <SearchIcon className="w-5" />
      </div>
    </div>
  );
};

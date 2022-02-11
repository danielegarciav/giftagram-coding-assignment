import clsx from 'clsx';
import { FC } from 'react';
import { ProductData } from '../api/types';

export interface MenuItem {
  label: string;
  url?: string;
}

export interface Props {
  items: MenuItem[];
  loading?: boolean;
}

const homeItem: MenuItem = { label: 'Home', url: '/' };
const loadingItem: MenuItem = { label: '...' };

export const Breadcrumbs: FC<Props> = ({ items, loading }) => {
  if (!items.length) return null;
  const totalItems = loading ? [...items, loadingItem] : items;
  const lastItem = totalItems[totalItems.length - 1];

  return (
    <div className="bg-[#e6e6e6] font-light truncate rounded max-w-sm my-6 px-3 py-2 flex flex-row gap-1">
      {totalItems.map((item, index) => (
        <a
          key={index}
          href={item.url}
          className={clsx(
            'select-none cursor-pointer transition-colors duration-200',
            item === lastItem
              ? ['text-neutral-600 hover:text-neutral-900 truncate']
              : ['text-neutral-400 hover:text-neutral-700'],
          )}
        >
          {item.label} {item !== lastItem && '>'}
        </a>
      ))}
    </div>
  );
};

export interface ProductProps {
  product?: ProductData;
}

export const ProductBreadcrumbs: FC<ProductProps> = ({ product }) => {
  const items: MenuItem[] = product
    ? [homeItem, { label: product.category.type, url: product.category.url }, { label: product.name }]
    : [homeItem];
  return <Breadcrumbs items={items} loading={!product} />;
};

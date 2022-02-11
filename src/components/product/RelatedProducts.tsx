import { FC, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from 'react-loading-skeleton';
import { ProductData } from '../../api/types';

interface Props {
  products?: ProductData[];
}

export const RelatedProducts: FC<Props> = ({ products }) => {
  return (
    <div className="mb-8">
      <p className="text-xl text-neutral-700 font-medium mb-4">Related gifts</p>
      <div className="w-full overflow-x-auto snap-x">
        <div className="flex flex-nowrap w-fit gap-5">
          {!products ? (
            <Skeleton className="w-72 h-96" count={4} />
          ) : (
            products.map((product, index) => (
              <a
                key={index}
                className="w-72 h-96 bg-white rounded shadow snap-start hover:shadow-lg hover:bg-neutral-100 cursor-pointer transition duration-200"
                href={`?productId=${product.id}`}
              >
                <LazyLoadImage
                  src={product.images[0].image}
                  alt={product.name}
                  className="h-56 object-cover"
                />
                <div className="p-4">
                  <p className="float-right pt-1">${product.price}</p>
                  <p className="text-lg">{product.name}</p>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

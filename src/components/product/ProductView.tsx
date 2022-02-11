import { FC, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ProductData } from '../../api/types';
import { ImageCarousel } from './ImageCarousel';

interface Props {
  product?: ProductData;
}

/**
 * Converts double line feeds into paragraph breaks and single line feeds into line breaks.
 */
const apiTextToNodes = (text: string, paragraphClassName?: string): ReactNode[] =>
  text
    .trim()
    .split('\r\n\r\n')
    .map((pText, pIndex) => (
      <p key={pIndex} className={paragraphClassName}>
        {pText
          .trim()
          .split('\r\n')
          .map((spanText, spanIndex) => (
            <span key={spanIndex * 2}>
              {spanText}
              <br key={spanIndex * 2 + 1} />
            </span>
          ))}
      </p>
    ));

export const ProductView: FC<Props> = ({ product }) => {
  return (
    <div className="grid grid-cols-9">
      <div className="col-span-5">
        {product ? (
          <ImageCarousel imageUrls={product.images.map(img => img.image)} />
        ) : (
          <Skeleton height="480px" />
        )}
      </div>
      <div className="col-span-4 px-12 py-2">
        <h3 className="text-xl font-semibold mb-2">{product ? product.name : <Skeleton />}</h3>
        <p className="text-lg mb-2">{product ? `$${product.price}` : <Skeleton />}</p>
        <div className="bg-white rounded-lg my-5 p-5">
          <h4 className="text-lg font-medium text-neutral-700 mb-2">
            {product ? 'Description' : <Skeleton />}
          </h4>
          {product ? (
            <div className="flex flex-col gap-4">
              {apiTextToNodes(product.description, 'text-neutral-600 leading-relaxed')}
            </div>
          ) : (
            <>
              <Skeleton count={3} />
              <br />
              <Skeleton count={3} />
            </>
          )}
        </div>
        {product ? (
          <>
            {product.shipnational === '1' && (
              <p className="mb-2">
                {product.shippingcost === 0 ? 'Free national shipping' : 'National shipping'}
              </p>
            )}
            {product.shippingmessage.message && <p className="mb-2">{product.shippingmessage.message}</p>}
          </>
        ) : (
          <Skeleton count={2} />
        )}

        <div className="my-4 flex flex-col gap-4 mb-8">
          <button className="bg-emerald-500 text-white font-semibold rounded p-4 transition duration-200 hover:brightness-110 focus:ring">
            Send as gift
          </button>
          <button className="bg-white font-semibold rounded p-4 transition duration-200 hover:brightness-90 focus:ring">
            Buy for myself
          </button>
        </div>
      </div>
    </div>
  );
};

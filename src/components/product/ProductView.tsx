import { FC, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ProductData } from '../../api/types';
import { ImageCarousel } from './ImageCarousel';

interface Props {
  product?: ProductData;
}

/**
 * Converts double line feeds (`\r\n\r\n`) into paragraph breaks and
 * single line feeds (`\r\n`) into line breaks.
 *
 * Returns an array of paragraphs, in which each paragraph is an array of text lines.
 *
 * @example
 * Given a string representing two paragraphs, with two lines in each paragraph,
 * the output would look like the this:
 * ```
 * [[line1, line2], [line3, line4]]
 * ```
 * where each `lineX` is of type `string`.
 */
export const splitTextIntoParagraphsAndLines = (text: string): string[][] =>
  text
    .trim()
    .split('\r\n\r\n')
    .map(paragraphText => paragraphText.trim().split('\r\n'));

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
              {splitTextIntoParagraphsAndLines(product.description).map((paragraphLines, paragraphIndex) => (
                <p key={paragraphIndex} className="text-neutral-600 leading-relaxed">
                  {paragraphLines.map((lineText, lineIndex) => (
                    <span key={lineIndex}>
                      {lineText}
                      <br />
                    </span>
                  ))}
                </p>
              ))}
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

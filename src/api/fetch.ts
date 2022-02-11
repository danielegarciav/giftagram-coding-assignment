import { ApiResponse, ProductData, ProductQueryResult, SearchQueryResult, SiteBannerData } from './types';

/** Creates a promise that resolves after `ms` milliseconds. */
const delay = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

export const fetchProductData = async (id: number): Promise<ProductData> => {
  const response = await fetch(`https://api.giftagram.com/api/gift/details?ids=${id}`);
  const json: ApiResponse<ProductQueryResult> = await response.json();
  if (json.code !== 200) throw new Error(`Received code ${json.code}`);
  const productData = json.data[0];
  if (!productData) throw new Error(`Product not found`);
  return productData;
};

export const fetchRelatedProducts = async (rootProductId: number, typeId: number): Promise<ProductData[]> => {
  const response = await fetch(
    `https://portal.giftagram.com/search?limit=10&format=json&gift_type=${typeId}&exclude=${rootProductId}&location=3`,
  );
  const json: ApiResponse<SearchQueryResult> = await response.json();
  if (json.code !== 200) throw new Error(`Received code ${json.code}`);
  return json.data.results.gifts;
};

export type { ProductData };

// Pretend to fetch the site banner data
// Production URL: https://api.giftagram.com/api/content/website-top-banner
export const fetchSiteBannerData = async (): Promise<SiteBannerData> => {
  await delay(500);
  return {
    alertText: 'Free shipping over $50',
    ctaText: 'Learn more',
    url: '#',
  };
};

export type { SiteBannerData };

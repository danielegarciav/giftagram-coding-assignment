// Misc tools and functions

import { ProductData } from './api/types';

export const getProductIdFromCurrentUrl = () =>
  Number.parseInt(new URL(window.location.href).searchParams.get('productId') ?? '1006');

export const getProductType = (product: ProductData) => Number.parseInt(product.type.split(',')[0] || '0');

import { FC, useState } from 'react';
import usePromise from 'react-use-promise';
import { fetchProductData, fetchRelatedProducts } from './api/fetch';
import { AboutSection } from './components/about/AboutSection';
import { MiniFaq } from './components/about/MiniFaq';
import { ProductBreadcrumbs } from './components/Breadcumbs';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { ProductView } from './components/product/ProductView';
import { RelatedProducts } from './components/product/RelatedProducts';
import { getProductIdFromCurrentUrl, getProductType } from './util';

export const App: FC = () => {
  const [productId, setProductId] = useState(getProductIdFromCurrentUrl());

  // Fetch current product...
  const [productData, error] = usePromise(() => fetchProductData(productId), [productId]);

  // ...and related products
  const [relatedProducts] = usePromise(async () => {
    if (!productData) return;
    return fetchRelatedProducts(productData.id, getProductType(productData));
  }, [productData]);

  return (
    <div className="root bg-[#F7F7F7] text-sm min-h-screen w-full flex flex-col">
      <Header />
      {error && <p className="text-center m-24">Something went wrong. Try again later.</p>}
      <div className="w-full max-w-7xl px-8 mx-auto">
        <ProductBreadcrumbs product={productData} />
        <ProductView product={productData} />
        <RelatedProducts products={relatedProducts} />
        <AboutSection />
        <MiniFaq />
      </div>
      <Footer>
        <ProductBreadcrumbs product={productData} />
      </Footer>
    </div>
  );
};

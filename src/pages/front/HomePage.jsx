import { useEffect, useState } from 'react';

import HeroBanner from '@/components/front/home/HeroBanner';
import CategorySection from '@/components/front/home/CategorySection';
import ProductSection from '@/components/front/home/ProductSection/ProductSection';

import BrandSection from '@/components/front/home/BrandSection';
import ReviewSection from '@/components/front/home/ReviewSection';
import NewsletterSection from '@/components/front/home/NewsletterSection';

import { getProducts } from '@/services/productService';

import PageLoader from '@/components/PageLoader';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [topProducts, setTpProducts] = useState([]);
  // const [ProductCategory, setProductCategory] = useState([]);

  // const [errorMessage, setErrorMessage] = useState('');
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  // 取得商品列表
  const fetchProducts = async () => {
    setIsScreenLoading(true);
    try {
      const productData = await getProducts();
      setProducts(productData);
      // 取 top7 給ProductSection當作隨機熱銷商品
      // const hotItems = products
      //   .filter((item) => {
      //     const val = item.is_enabled;
      //     return val === 1 || val === '1' || (val != null && String(val).toLowerCase() === 'true');
      //   })
      //   .sort(() => Math.random() - 0.5)
      //   .slice(0, 7);
      const hotItems = products
        .filter((item) => Number(item.is_enabled) === 1)
        .sort(() => Math.random() - 0.5)
        .slice(0, 7);
      setTpProducts(hotItems);

      // 取 productData的 Category 種類 給CategorySection使用
    } catch (error) {
      console.error(error);
      // handleApiError(error, setErrorMessage, '取得產品失敗');
    } finally {
      setIsScreenLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* 保留bootstarp-container，原因是我要用bootstarp他的排版 */}
      <section className="ui-section">
        <div className="ui-container">
          <HeroBanner />
        </div>
      </section>

      {/* <section className="ui-section">
        <div className="ui-container">
          <CategorySection />
        </div>
      </section> */}
      <CategorySection />

      <ProductSection topProducts={topProducts} />

      <section className="ui-section">
        <div className="ui-container">
          <BrandSection />
        </div>
      </section>

      <section className="ui-section">
        <div className="ui-container">
          <ReviewSection />
        </div>
      </section>

      <section className="ui-section">
        <div className="ui-container">
          <NewsletterSection />
        </div>
      </section>

      {/* ScreenLoading */}
      <PageLoader show={isScreenLoading} zIndex={2000} />
    </>
  );
}

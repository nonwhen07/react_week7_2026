import { useEffect, useState } from 'react';

import HeroBanner from '@/components/front/home/HeroBanner';
import CategorySection from '@/components/front/home/CategorySection';
import ProductSection from '@/components/front/home/ProductSection';

import BrandSection from '@/components/front/home/BrandSection';
import ReviewSection from '@/components/front/home/ReviewSection';
import NewsletterSection from '@/components/front/home/NewsletterSection';

import { getProducts } from '@/services/productService';

import PageLoader from '@/components/PageLoader';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [hotProducts, setHotProducts] = useState([]);

  // const [errorMessage, setErrorMessage] = useState('');
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  // 取得商品列表
  const fetchProducts = async () => {
    setIsScreenLoading(true);
    try {
      const products = await getProducts();
      setProducts(products);

      const hotItems = products
        .filter((item) => {
          const val = item.is_enabled;
          return val === 1 || val === '1' || (val != null && String(val).toLowerCase() === 'true');
        })
        .sort(() => Math.random() - 0.5)
        .slice(0, 7);
      // 取 top7 當作隨機熱銷商品
      setHotProducts(hotItems);
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

      <ProductSection products={hotProducts} />

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

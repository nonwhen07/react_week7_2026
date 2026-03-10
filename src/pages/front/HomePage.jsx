import HeroBanner from '@/components/front/home/HeroBanner';
import CategorySection from '@/components/front/home/CategorySection';
import ProductCard from '@/components/front/home/ProductCard';
import BrandSection from '@/components/front/home/BrandSection';
import ReviewSection from '@/components/front/home/ReviewSection';
import NewsletterSection from '@/components/front/home/NewsletterSection';

export default function HomePage() {
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

      <section className="ui-section">
        <div className="ui-container">
          <ProductCard />
        </div>
      </section>

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
    </>
  );
}

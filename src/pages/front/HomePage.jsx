import HeroBanner from '@/components/front/home/HeroBanner';
import CategoryCard from '@/components/front/home/CategoryCard';
import ProductCard from '@/components/front/home/ProductCard';
import BrandSection from '@/components/front/home/BrandSection';
import ReviewSection from '@/components/front/home/ReviewSection';
import NewsletterSection from '@/components/front/home/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="section">
          <h1>HeroBanner</h1>
          <p>這是 HeroBanner 的內容。</p>
          <HeroBanner />
        </div>
        <div className="section">
          <h2>CategorySection</h2>
          <p>這是 CategorySection 的內容。</p>
          <CategoryCard />
        </div>
        <div className="section">
          <h2>ProductSection</h2>
          <p>這是 ProductSection 的內容。</p>
          <ProductCard />
          {/* <ProductSection title="Featured Plants" />

          <ProductSection title="Seasonal Flowers" />

          <ProductSection title="Garden Supplies" /> */}
        </div>
        <div className="section">
          <h2>BrandSection</h2>
          <p>這是 BrandSection 的內容。</p>
          <BrandSection />
        </div>
        <div className="section">
          <h2>ReviewSection</h2>
          <p>這是 ReviewSection 的內容。</p>
          <ReviewSection />
        </div>
        <div className="section">
          <h2>NewsletterSection</h2>
          <p>這是 NewsletterSection 的內容。</p>
          <NewsletterSection />
        </div>
      </div>
    </>
  );
}

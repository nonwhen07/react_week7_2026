// import ProductGrid from '@/components/front/home/ProductSection/ProductGrid';
// import ViewMoreButton from '@/components/front/home/ProductSection/ViewMoreButton';
import SectionHeader from '@/components/front/home/ProductSection/SectionHeader';
import ProductSlider from '@/components/front/home/ProductSection/ProductSlider';

const ProductSection = ({ topProducts }) => {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <h2 className="ui-section-title">Featured Products</h2>

        <SectionHeader title="Featured Products" link="/products" />

        <ProductSlider products={topProducts} />
      </div>
    </section>
  );
};

export default ProductSection;

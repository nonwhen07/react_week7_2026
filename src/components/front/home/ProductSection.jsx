import ProductCard from '@/components/front/home/ProductCard';

const ProductSection = ({ products }) => {
  return (
    <section className="ui-section">
      <div className="ui-container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">Featured Plants</h2>
          <p className="section-subtitle">Handpicked plants for your home</p>
        </div>

        {/* Product Grid */}
        <div className="row g-3 g-lg-4">
          {products.map((productItem) => (
            <div key={productItem.id} className="col-lg-3 col-md-6 col-6">
              <ProductCard productItem={productItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

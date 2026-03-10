import ProductCard from '@/components/front/home/ProductSection/ProductCard';

// 日後可以改成 Swiper
const ProductGrid = ({ products }) => {
  return (
    <div className="product-scroll">
      {products.map((product) => (
        <div className="product-scroll-item" key={product.id}>
          <ProductCard productItem={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

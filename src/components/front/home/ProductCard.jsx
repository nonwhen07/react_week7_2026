const ProductCard = ({ product }) => {
  return (
    <div className="card-product">
      <div className="card-product__image">
        <img src={product.imageUrl} alt={product.title} />
      </div>

      <div className="card-product__content">
        <h3 className="card-product__title">{product.title}</h3>

        <p className="card-product__price">${product.price}</p>

        <button className="ui-btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

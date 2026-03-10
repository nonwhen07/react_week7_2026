const CategoryCard = ({ category }) => {
  return (
    <div className="card-category">
      <div className="card-category__image">
        <img src={category.image} />
      </div>

      <h3 className="card-category__title">{category.title}</h3>
    </div>
  );
};

export default CategoryCard;

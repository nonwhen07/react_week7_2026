const CategoryCard = ({ category }) => {
  // const category = {
  //   title: 'Plants',
  //   image: '/img/category-plants.jpg',
  // };

  return (
    <div className="card-category">
      <div className="card-category__image">
        <img src={category.image} alt={category.title} />
        {/* 未來可以補上loading */}
        {/* <img src={category.image} alt={category.title} loading="lazy" /> */}
      </div>

      <h3 className="card-category__title">{category.title}</h3>
    </div>
  );
};

export default CategoryCard;

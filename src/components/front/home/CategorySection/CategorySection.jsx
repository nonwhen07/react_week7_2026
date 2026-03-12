import CategoryCard from '@/components/front/home/CategoryCard';

const CategorySection = () => {
  const categories = [
    { id: 1, title: 'Plants', image: '/img/plant.jpg' },
    { id: 2, title: 'Flowers', image: '/img/flower.jpg' },
    { id: 3, title: 'Tools', image: '/img/tools.jpg' },
    { id: 4, title: 'Pots', image: '/img/pots.jpg' },
  ];
  return (
    <section className="ui-section">
      <div className="ui-container">
        <div className="row g-3 g-lg-4">
          <div className="col-lg-3 col-md-6 col-6">
            {categories.map((category) => (
              <div key={category.id} className="col-lg-3 col-md-6 col-6">
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

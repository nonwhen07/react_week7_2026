import CategoryCard from '@/components/front/home/Seasonal/SeasonalCard';
const seasonalProducts = [
  {
    id: 1,
    title: 'Valentine Rose Bouquet',
    price: 980,
    image: '/images/seasonal/rose-bouquet.jpg',
  },
  {
    id: 2,
    title: 'Spring Tulip Gift',
    price: 720,
    image: '/images/seasonal/tulip.jpg',
  },
  {
    id: 3,
    title: 'Lucky Bamboo Plant',
    price: 420,
    image: '/images/seasonal/bamboo.jpg',
  },
  {
    id: 4,
    title: 'Orchid Flower Set',
    price: 1280,
    image: '/images/seasonal/orchid.jpg',
  },
];

const SeasonalSection = () => {
  return (
    <section className="ui-section seasonal-section">
      <div className="ui-container">
        <div className="text-center mb-5">
          <h2>Seasonal Collection</h2>
          <p className="text-muted">為即將到來的節日準備特別花禮</p>
        </div>

        <div className="row g-4">
          {seasonalProducts.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-3">
              <SeasonalProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;

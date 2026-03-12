const GardenTipCard = ({ tip }) => {
  return (
    <div className="garden-tip-card card border-0 h-100 shadow-sm">
      <img src={tip.image} alt={tip.title} className="card-img-top" loading="lazy" />

      <div className="card-body">
        <h5 className="card-title">{tip.title}</h5>

        <p className="card-text text-muted">{tip.description}</p>

        <a href="#" className="btn btn-outline-success btn-sm">
          閱讀更多
        </a>
      </div>
    </div>
  );
};

export default GardenTipCard;

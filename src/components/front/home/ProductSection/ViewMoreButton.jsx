import { Link } from 'react-router-dom';

const ViewMoreButton = () => {
  return (
    <div className="text-center mt-4">
      {/* <Link to="/products" className="ui-btn ui-btn-outline">
        View More Products
      </Link> */}
      <Link to="/products" className="ui-btn">
        View More Products
      </Link>
    </div>
  );
};

export default ViewMoreButton;

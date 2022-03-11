import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import propTypes from 'prop-types';

const StockCard = (props) => {
  const { data } = props;
  return (
    <NavLink key={data.company} to="/details" className="col-6 text-decoration-none" activeclassname="active-link">
      <Card variant="Light" className="text-dark">
        <Card.Body>
          <Card.Title>{data.company}</Card.Title>
          <Card.Text>
            <strong>Current Stock Price:</strong>
            <br />
            {data.stockPrice}
          </Card.Text>
          <Card.Text>
            <strong>Current Stock Volume:</strong>
            <br />
            {data.stockVolume}
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
};

StockCard.propTypes = {
  data: propTypes.objectOf(String).isRequired,
};

export default StockCard;

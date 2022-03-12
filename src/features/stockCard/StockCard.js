import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import { fetchCompanyRating } from '../details/detailsActions';

const StockCard = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  return (
    <NavLink key={uuidv4()} to="/details" className="col-6 text-decoration-none" activeclassname="active-link">
      <Card variant="Light" className="text-dark" onClick={() => dispatch(fetchCompanyRating(`https://financialmodelingprep.com/api/v3/rating/${data.company}?apikey=ac20e3a1c1863a3ebafe49107c5c4169`))}>
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

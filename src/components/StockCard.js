import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import { fetchCompanyRating } from '../redux/detailsActions';
import { page } from '../redux/homeActions';
import apiKey from '../apiKey';
import '../styles/StockCard.css';

const StockCard = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  return (
    <NavLink key={uuidv4()} to="/details" className="text-decoration-none w-50 align-self-stretch" activeclassname="active-link">
      <Card
        variant="Light"
        className="text-dark h-100"
        onClick={() => {
          dispatch(fetchCompanyRating(`https://financialmodelingprep.com/api/v3/rating/${data.company}?apikey=${apiKey}`));
          dispatch(page('details'));
        }}
      >
        <Card.Body>
          <Card.Title>{data.company}</Card.Title>
          <Card.Text>
            <strong>Stock Price:</strong>
            <br />
            {data.stockPrice}
          </Card.Text>
          <Card.Text>
            <strong>Stock Volume:</strong>
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

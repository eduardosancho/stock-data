import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import propTypes from 'prop-types';

const StockCard = (props) => {
  const { data } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{data.company}</Card.Title>
        <ListGroup>
          <ListGroup.Item>{data.stockPrice}</ListGroup.Item>
          <ListGroup.Item>{data.stockVolume}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

StockCard.propTypes = {
  data: propTypes.objectOf(String).isRequired,
};

export default StockCard;

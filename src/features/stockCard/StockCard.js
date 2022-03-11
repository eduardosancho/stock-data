import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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

export default StockCard;

import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

const StockPrice = () => {
  const exclamation = '!';

  return (
    <ListGroup>
      <ListGroup.Item>
        Lorem
        {exclamation}
      </ListGroup.Item>
      <ListGroup.Item>Lorem</ListGroup.Item>
      <ListGroup.Item>Lorem</ListGroup.Item>
      <ListGroup.Item>Lorem</ListGroup.Item>
      <ListGroup.Item>Lorem</ListGroup.Item>
    </ListGroup>
  );
};

export default StockPrice;

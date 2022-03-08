import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

const Details = () => {
  const exclamation = '!';

  return (
    <ListGroup>
      <ListGroup.Item>
        Ipsum
        {exclamation}
      </ListGroup.Item>
      <ListGroup.Item>Ipsum</ListGroup.Item>
      <ListGroup.Item>Ipsum</ListGroup.Item>
      <ListGroup.Item>Ipsum</ListGroup.Item>
      <ListGroup.Item>Ipsum</ListGroup.Item>
    </ListGroup>
  );
};

export default Details;

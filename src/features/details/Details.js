import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  selectStatusDetails,
  selectCompanyRating,
} from './detailsActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = () => {
  const companyRating = useSelector(selectCompanyRating);
  const status = useSelector(selectStatusDetails);

  if (status === 'loading' || status === 'idle') return <p>Loading...</p>;

  return (
    <ListGroup>
      <ListGroup.Item>
        {companyRating.symbol}
      </ListGroup.Item>
      <ListGroup.Item>Ipsum</ListGroup.Item>
      <ListGroup.Item>Ipsum</ListGroup.Item>
      <ListGroup.Item>Ipsum</ListGroup.Item>
      <ListGroup.Item>Ipsum</ListGroup.Item>
    </ListGroup>
  );
};

export default Details;

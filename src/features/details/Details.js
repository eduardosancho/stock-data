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
    <>
      <h1>{companyRating.symbol}</h1>
      <h3>{companyRating.date}</h3>
      <h5>
        Rating 1-5:
        {'\n'}
        {companyRating.ratingScore}
      </h5>
      <ListGroup>
        <ListGroup.Item>
          DCF Score:
          {'\n'}
          {companyRating.ratingDetailsDCFScore}
          <br />
          DCF Recommendation:
          {'\n'}
          {companyRating.ratingDetailsDCFRecommendation}
        </ListGroup.Item>
        <ListGroup.Item>
          ROE Score:
          {'\n'}
          {companyRating.ratingDetailsROEScore}
          <br />
          ROE Recommendation:
          {'\n'}
          {companyRating.ratingDetailsROERecommendation}
        </ListGroup.Item>
        <ListGroup.Item>
          ROA Score:
          {'\n'}
          {companyRating.ratingDetailsROAScore}
          <br />
          ROA Recommendation:
          {'\n'}
          {companyRating.ratingDetailsROARecommendation}
        </ListGroup.Item>
        <ListGroup.Item>
          DE Score:
          {'\n'}
          {companyRating.ratingDetailsDEScore}
          <br />
          DE Recommendation:
          {'\n'}
          {companyRating.ratingDetailsDERecommendation}
        </ListGroup.Item>
        <ListGroup.Item>
          PE Score:
          {'\n'}
          {companyRating.ratingDetailsPEScore}
          <br />
          PE Recommendation:
          {'\n'}
          {companyRating.ratingDetailsPERecommendation}
        </ListGroup.Item>
        <ListGroup.Item>
          PB Score:
          {'\n'}
          {companyRating.ratingDetailsPBScore}
          <br />
          PB Recommendation:
          {'\n'}
          {companyRating.ratingDetailsPBRecommendation}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Details;

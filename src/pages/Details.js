import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  selectStatusDetails,
  selectCompanyRating,
} from '../redux/detailsActions';
import '../styles/Details.css';
import graph from '../assets/graph.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = () => {
  const companyRating = useSelector(selectCompanyRating);
  const status = useSelector(selectStatusDetails);

  if (status === 'loading' || status === 'idle') {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  if (status === 'unavailable') {
    return (
      <>
        <p>Sorry... data unavailable, try again tomorrow</p>
      </>
    );
  }

  return (
    <div className="d-flex flex-column">
      <div className="details-header p-3">
        <div className="target-container">
          <img src={graph} alt="stock" className="target" />
        </div>
        <div className="header-container">
          <h1>{companyRating.symbol}</h1>
          <h3>{companyRating.date}</h3>
          <h5>
            &ldquo;Should you buy?&ldquo;:
            {'\n'}
            {companyRating.ratingScore}
            /5
          </h5>
        </div>
      </div>
      <div className="details-title">Breakdown of &ldquo;Buy Recommendation&ldquo;</div>
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
    </div>
  );
};

export default Details;

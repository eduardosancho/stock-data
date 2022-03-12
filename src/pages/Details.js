import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  selectStatusDetails,
  selectCompanyRating,
} from '../redux/detailsActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = () => {
  const companyRating = useSelector(selectCompanyRating);
  const status = useSelector(selectStatusDetails);

  if (status === 'loading' || status === 'idle') {
    return (
      <>
        <p>Loading...</p>
        <NavLink key={uuidv4()} to="/" className="text-decoration-none align-self-start m-3" activeclassname="active-link">
          <p className="ml-0 mr-auto">Back to home</p>
        </NavLink>
      </>
    );
  }
  if (status === 'unavailable') {
    return (
      <>
        <p>Data unavailable, try again tomorrow</p>
        <NavLink key={uuidv4()} to="/" className="text-decoration-none align-self-start m-3" activeclassname="active-link">
          <p className="ml-0 mr-auto">Back to home</p>
        </NavLink>
      </>
    );
  }

  return (
    <div className="d-flex flex-column">
      <NavLink key={uuidv4()} to="/" className="text-decoration-none align-self-start m-3" activeclassname="active-link">
        <p className="ml-0 mr-auto">Back to home</p>
      </NavLink>
      <h1>{companyRating.symbol}</h1>
      <h3>{companyRating.date}</h3>
      <h5>
        &ldquo;Should you buy?&ldquo; (1-5):
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
    </div>
  );
};

export default Details;

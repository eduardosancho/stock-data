import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';
import StockCard from '../stockCard/StockCard';
import {
  selectStatusHome,
  fetchCurrentStock,
  selectResultData,
} from './homeActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const dispatch = useDispatch();
  const resultData = useSelector(selectResultData);
  const status = useSelector(selectStatusHome);

  useEffect(() => {
    if (resultData.length === 0) {
      dispatch(fetchCurrentStock('https://financialmodelingprep.com/api/v3/quote-short/MSFT?apikey=52fdd430ffd03a27128580af9ddc7381'));
      dispatch(fetchCurrentStock('https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=52fdd430ffd03a27128580af9ddc7381'));
      dispatch(fetchCurrentStock('https://financialmodelingprep.com/api/v3/quote-short/GOOGL?apikey=52fdd430ffd03a27128580af9ddc7381'));
      dispatch(fetchCurrentStock('https://financialmodelingprep.com/api/v3/quote-short/AMZN?apikey=52fdd430ffd03a27128580af9ddc7381'));
      dispatch(fetchCurrentStock('https://financialmodelingprep.com/api/v3/quote-short/TSLA?apikey=52fdd430ffd03a27128580af9ddc7381'));
      dispatch(fetchCurrentStock('https://financialmodelingprep.com/api/v3/quote-short/FB?apikey=52fdd430ffd03a27128580af9ddc7381'));
    }
  }, []);

  if (status === 'loading' || status === 'idle') return <p>Loading...</p>;

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 2000; i <= currentYear; i += 1) {
    years.push(i);
  }

  return (
    <>
      <Form className="d-flex border-1 mx-auto w-100 justify-content-center">
        <Form.Group controlId="formCompanyName">
          <Form.Label>NSE Abbreviation</Form.Label>
          <Form.Control type="text" placeholder="Amazon => AMZN" className="py-2" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formYear">
          <Form.Label>Filter Year</Form.Label>
          <Form.Select aria-label="Default select example" size="sm" className="mh-25 py-2" style={{ fontSize: '1rem' }}>
            {years.reverse().map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      <CardGroup className="d-flex flex-wrap">
        {resultData?.map((result) => <StockCard key={result.company} data={result} />)}
      </CardGroup>
    </>
  );
};

export default Home;

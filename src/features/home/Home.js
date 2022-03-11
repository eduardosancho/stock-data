import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

  return (
    <>
      <CardGroup className="d-flex flex-wrap">
        {resultData?.map((result) => <StockCard key={result.company} data={result} />)}
      </CardGroup>
    </>
  );
};

export default Home;

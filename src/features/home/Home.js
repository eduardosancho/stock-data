import React from 'react';
import { useSelector } from 'react-redux';
import CardGroup from 'react-bootstrap/CardGroup';
import StockCard from '../stockCard/StockCard';
import {
  selectStatusHome,
  selectResultData,
} from './homeActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateForm from '../forms/DateForm';

const Home = () => {
  const resultData = useSelector(selectResultData);
  const status = useSelector(selectStatusHome);

  if (status === 'loading' || status === 'idle') {
    return (
      <>
        <DateForm />
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <DateForm />
      <CardGroup className="d-flex flex-wrap">
        {resultData?.map((result) => <StockCard key={result.company} data={result} />)}
      </CardGroup>
    </>
  );
};

export default Home;

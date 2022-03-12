import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { useSelector } from 'react-redux';
import CardGroup from 'react-bootstrap/CardGroup';
import StockCard from '../components/StockCard';
import {
  selectStatusHome,
  selectResultData,
} from '../redux/homeActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateForm from '../components/DateForm';
import '../styles/Home.css';
import target from '../assets/target.png';

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
      <div className="header">
        <div className="target-container">
          <img src={target} alt="stock" className="target" />
        </div>
        <div className="header-container">
          <p className="nyse">New York Stock Exchange</p>
        </div>
      </div>
      <div className="home-title">Main Stock Info Filtered By Date</div>
      <CardGroup className="d-flex flex-wrap">
        {resultData?.map((result) => <StockCard key={uuidv4()} data={result} />)}
      </CardGroup>
    </>
  );
};

export default Home;

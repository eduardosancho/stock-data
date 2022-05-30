import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import CardGroup from 'react-bootstrap/CardGroup';
import {
  React,
  // useState,
  useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  cleanData,
  fetchCurrentStock,
  selectStatusHome,
  selectResultData,
} from '../redux/homeActions';
import StockCard from '../components/StockCard';
import target from '../assets/target.png';
// import DateForm from '../components/DateForm';
import Footer from '../components/Footer';
import '../styles/Home.css';
import apikey from '../apiKey';
// import today from '../utils';

const Home = () => {
  const dispatch = useDispatch();

  // const [date, setDate] = useState('');

  useEffect(() => {
    // setDate(today());
    dispatch(cleanData());

    dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/quote-short/TSLA?apikey=${apikey}`));
    dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/quote-short/GOOGL?apikey=${apikey}`));
    dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/quote-short/MSFT?apikey=${apikey}`));
    dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=${apikey}`));
    // dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/quote-short/AMZN?apikey=${apikey}`));
    // dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/quote-short/FB?apikey=${apikey}`));

    // dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/FB?apikey=${apikey}${date}`));
  }, []);

  const resultData = useSelector(selectResultData);
  const status = useSelector(selectStatusHome);

  if (status === 'loading' || status === 'idle') {
    return (
      <>
        {/* <DateForm /> */}
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      {/* <DateForm /> */}
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
      <Footer />
    </>
  );
};

export default Home;

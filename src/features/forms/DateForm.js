import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  cleanData,
  fetchCurrentStock,
} from '../home/homeActions';
import today from '../utils';

const DateForm = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(today());
  }, []);

  useEffect(() => {
    dispatch(cleanData());
    if (date !== '') {
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/GOOGL?apikey=a91d1c37e8df6ad18c31120dc55edfeb${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/MSFT?apikey=a91d1c37e8df6ad18c31120dc55edfeb${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=a91d1c37e8df6ad18c31120dc55edfeb${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/AMZN?apikey=a91d1c37e8df6ad18c31120dc55edfeb${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/TSLA?apikey=a91d1c37e8df6ad18c31120dc55edfeb${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/FB?apikey=a91d1c37e8df6ad18c31120dc55edfeb${date}`));
    }
  }, [date]);

  return (
    <Form className="d-flex flex-column border-1 m-2 w-100 justify-content-center">
      <Form.Group className="mb-3 align-self-center" controlId="formYear">
        <Form.Label>Filter By Year:</Form.Label>
        <Form.Control
          type="date"
          value={date}
          min="2017-03-13"
          max={today()}
          onChange={({ target }) => {
            setDate(target.value);
          }}
        />
      </Form.Group>
    </Form>
  );
};

export default DateForm;

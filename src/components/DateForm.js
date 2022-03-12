import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  cleanData,
  fetchCurrentStock,
} from '../redux/homeActions';
import today from '../utils';
import apikey from '../apiKey';

const DateForm = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(today());
  }, []);

  useEffect(() => {
    dispatch(cleanData());
    if (date !== '') {
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/GOOGL?apikey=${apikey}${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/MSFT?apikey=${apikey}${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=${apikey}${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/AMZN?apikey=${apikey}${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/TSLA?apikey=${apikey}${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/FB?apikey=${apikey}${date}`));
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

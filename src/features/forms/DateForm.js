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
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/GOOGL?apikey=ac20e3a1c1863a3ebafe49107c5c4169${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/MSFT?apikey=ac20e3a1c1863a3ebafe49107c5c4169${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=ac20e3a1c1863a3ebafe49107c5c4169${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/AMZN?apikey=ac20e3a1c1863a3ebafe49107c5c4169${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/TSLA?apikey=ac20e3a1c1863a3ebafe49107c5c4169${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/FB?apikey=ac20e3a1c1863a3ebafe49107c5c4169${date}`));
    }
  }, [date]);

  return (
    <Form className="d-flex border-1 mx-auto w-100 justify-content-center">
      <Form.Group className="mb-3" controlId="formYear">
        <Form.Label>Filter By Year:</Form.Label>
        {date}
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

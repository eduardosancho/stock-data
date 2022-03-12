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
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/GOOGL?apikey=52fdd430ffd03a27128580af9ddc7381${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/MSFT?apikey=52fdd430ffd03a27128580af9ddc7381${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=52fdd430ffd03a27128580af9ddc7381${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/AMZN?apikey=52fdd430ffd03a27128580af9ddc7381${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/TSLA?apikey=52fdd430ffd03a27128580af9ddc7381${date}`));
      dispatch(fetchCurrentStock(`https://financialmodelingprep.com/api/v3/historical-price-full/FB?apikey=52fdd430ffd03a27128580af9ddc7381${date}`));
    }
  }, [date]);

  return (
    <Form className="d-flex border-1 mx-auto w-100 justify-content-center">
      <Form.Group className="mb-3" controlId="formYear">
        <Form.Label>Filter By Year:</Form.Label>
        {date}
        <Form.Control
          id="start"
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

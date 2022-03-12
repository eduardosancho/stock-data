import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  page,
  cleanData,
  selectPageState,
  selectResultData,
  fetchCurrentStock,
} from '../home/homeActions';
import today from '../utils';


const DateForm = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const resultData = useSelector(selectResultData);
  const currentPage = useSelector(selectPageState);

  useEffect(() => {
    setDate(today());
  }, []);

  useEffect(() => {
    console.log('waiting for date');
    dispatch(cleanData());
    if (date !== '') {
      console.log(date);
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

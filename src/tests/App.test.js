import { rest } from 'msw';
import { setupServer } from 'msw/node';
import render, { screen } from './test-utils';
import Home from '../pages/Home';
import apikey from '../apiKey';

const handlers = [
  rest.get(`https://financialmodelingprep.com/api/v3/historical-price-full/FB?apikey=${apikey}`, (req, res, ctx) => res(
    ctx.json(
      {
        symbol: 'FB',
        historical: [{
          date: '2022-03-11',
          open: 192.635,
          high: 193.56,
          low: 186.67,
          close: 187.61,
          adjClose: 187.61,
          volume: 3.4231161E7,
          unadjustedVolume: 3.4231161E7,
          change: -5.025,
          changePercent: -2.609,
          vwap: 189.28,
          label: 'March 11, 22',
          changeOverTime: -0.02609,
        }],
      },
    ),
    ctx.delay(150),
  )),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Should render StockCards', () => {
  test('Should render FB card', async () => {
    render(<Home />);
    const cardElement = await screen.findByText('FB');
    expect(cardElement.textContent).toEqual('FB');
  });
});

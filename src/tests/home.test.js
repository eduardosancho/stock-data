import reducer, { cleanData, page } from '../redux/homeActions';

describe('Testing pure functions home', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      statusHome: 'idle',
      resultData: [],
      currentPage: 'home',
    });
  });

  test('should handle a page being change currentPage to details', () => {
    const previousState = {
      statusHome: 'idle',
      resultData: [],
      currentPage: 'home',
    };
    expect(reducer(previousState, page('details'))).toEqual({
      statusHome: 'idle',
      resultData: [],
      currentPage: 'details',
    });
  });

  test('should handle a page being change currentPage to home', () => {
    const previousState = {
      statusHome: 'idle',
      resultData: [],
      currentPage: 'details',
    };
    expect(reducer(previousState, page('home'))).toEqual({
      statusHome: 'idle',
      resultData: [],
      currentPage: 'home',
    });
  });
  test('resultData should be an empty array', () => {
    const previousState = {
      statusHome: 'idle',
      resultData: ['A', 'B', 'C', 'D', 'E'],
      currentPage: 'details',
    };
    expect(reducer(previousState, cleanData())).toEqual({
      statusHome: 'idle',
      resultData: [],
      currentPage: 'details',
    });
  });
});

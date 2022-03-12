import reducer from '../features/details/detailsActions';

describe('Testing pure functions details', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      statusDetails: 'idle',
      ratingData: [],
      currentPage: 'details',
    });
  });
});

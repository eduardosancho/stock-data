import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  statusDetails: 'idle',
  ratingData: [],
  currentPage: 'details',
};

export const fetchCompanyRating = createAsyncThunk(
  'details/fetchCompanyRating',
  async (url) => {
    const response = await fetch(url)
      .then((res) => res.json());
    return response;
  },
);

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    page: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyRating.pending, (state) => ({
        ...state,
        statusDetails: 'loading',
      }))
      .addCase(fetchCompanyRating.fulfilled, (state, action) => {
        // let obj = {};
        // const data = action.payload[0];
        // let newData = {};
        const ratingData = action.payload[0];
        return ({
          ...state,
          ratingData,
          statusDetails: 'fulfilled',
        });
      });
  },
});

export const selectCompanyRating = (state) => state.details.ratingData;
export const selectStatusDetails = (state) => state.details.statusDetails;

export const { page } = detailsSlice.actions;

export default detailsSlice.reducer;

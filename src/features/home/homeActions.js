import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  statusHome: 'idle',
  results: [],
  currentPage: 'home',
};

export const fetchCurrentStock = createAsyncThunk(
  'home/fetchCurrentStock',
  async (url) => {
    const response = await fetch(url)
      .then((res) => res.json());
    return response;
  },
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    page: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentStock.pending, (state) => ({
        ...state,
        statusHome: 'loading',
      }))
      .addCase(fetchCurrentStock.rejected, (state) => ({
        ...state,
        statusHome: 'rejected',
      }))
      .addCase(fetchCurrentStock.fulfilled, (state, action) => ({
        ...action,
        statusHome: 'fulfilled',
      }));
  },
});

export const selectResults = (state) => state.home.results;
export const selectStatusHome = (state) => state.home.statusHome;
export const selectTotal = (state) => state.home.total;
export const selectPageState = (state) => state.home.currentPage;

export const { page } = homeSlice.actions;

export default homeSlice.reducer;

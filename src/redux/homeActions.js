import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  statusHome: 'idle',
  resultData: [],
  currentPage: 'home',
};

export const fetchCurrentStock = createAsyncThunk(
  'home/fetchCurrentStock',
  async (param) => {
    const separationPoint = param.length;
    const url = param.substr(0, separationPoint);
    const response = await fetch(url)
      .then((res) => res.json());
    return {
      response,
    };
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
    cleanData: (state) => ({
      ...state,
      resultData: [],
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentStock.pending, (state) => ({
        ...state,
        statusHome: 'loading',
      }))
      .addCase(fetchCurrentStock.fulfilled, (state, action) => {
        let obj = {};
        const data = action.payload.response[0];
        let newData = {};
        if (data) {
          newData = {
            company: data.symbol,
            stockPrice: data.price,
            stockVolume: data.volume,
          };
        } else {
          const urlString = action.meta.arg;
          const companyStr = urlString.substr(0, urlString.indexOf('?')).substr(53);
          newData = {
            company: companyStr,
            stockPrice: 'currently not available',
            stockVolume: 'please try again',
          };
        }
        obj = {
          ...state,
          resultData: [newData, ...state.resultData],
          statusHome: 'fulfilled',
        };
        return obj;
      });
  },
});

export const selectResultData = (state) => state.home.resultData;
export const selectStatusHome = (state) => state.home.statusHome;
export const selectTotal = (state) => state.home.total;
export const selectPageState = (state) => state.home.currentPage;

export const { page, cleanData } = homeSlice.actions;

export default homeSlice.reducer;

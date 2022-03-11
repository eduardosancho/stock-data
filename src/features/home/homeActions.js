import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  statusHome: 'idle',
  resultData: [],
  currentPage: 'home',
};

export const fetchCurrentStock = createAsyncThunk(
  'home/fetchCurrentStock',
  async (param) => {
    const separationPoint = param.length - 10;
    const url = param.substr(0, separationPoint);
    console.log(url);
    const date = param.substr(separationPoint);
    console.log(date);
    const response = await fetch(url)
      .then((res) => res.json());
    console.log(response);
    console.log(url);
    console.log(date);
    return {
      response,
      date,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentStock.pending, (state) => ({
        ...state,
        statusHome: 'loading',
      }))
      .addCase(fetchCurrentStock.fulfilled, (state, action) => {
        let obj = {};
        const data = action.payload.response;
        const date = action.payload.date;
        console.log(data, date);
        let newData = {};
        if (action.payload[0]) {
          const {
            symbol: company,
            price: stockPrice,
            volume: stockVolume,
          } = data;
          newData = {
            company,
            stockPrice,
            stockVolume,
          };
          console.log('one dispatch', newData);
        } else {
          const urlString = action.meta.arg;
          const companyStr = urlString.substr(0, urlString.indexOf('?')).substr(63);
          console.log(companyStr);
          newData = {
            company: companyStr,
            stockPrice: 'currently not available',
            stockVolume: 'please try again',
          };
          console.log(action.payload);
        }
        obj = {
          ...state,
          resultData: [...state.resultData, newData],
          statusHome: 'fulfilled',
        };
        obj.resultData.sort((a, b) => {
          if (a.company < b.company) { return -1; }
          if (a.company > b.company) { return 1; }
          return 0;
        });
        return obj;
      });
  },
});

export const selectResultData = (state) => state.home.resultData;
export const selectStatusHome = (state) => state.home.statusHome;
export const selectTotal = (state) => state.home.total;
export const selectPageState = (state) => state.home.currentPage;

export const { page } = homeSlice.actions;

export default homeSlice.reducer;

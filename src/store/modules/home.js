import { getGoodPriceData, getHighScoreData } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoodPriceAction = createAsyncThunk(
  "goodprice",
  (payload, { dispatch }) => {
    getGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  extraReducers: {},
});

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } =
  homeSlice.actions;
export default homeSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import { FETCH_STATE } from "./constants";
import { getQuote } from "./quoteAPI";
import { IQuote } from "./types";

export interface QuoteState {
  data: IQuote | null;
  state: FETCH_STATE;
}

const initialState: QuoteState = {
  data: null,
  state: FETCH_STATE.INACTIVE,
};

export const getQuoteAsync = createAsyncThunk(
  "quote/getQuote",
  async (character: string) => {
    try {
      const quote = await getQuote(character);

      return quote;
    } catch (err) {
      throw err;
    }
  }
);

export const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    clean: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getQuoteAsync.pending, (state) => {
        state.state = FETCH_STATE.LOADING;
      })
      .addCase(getQuoteAsync.fulfilled, (state, action) => {
        state.state = FETCH_STATE.INACTIVE;
        state.data = action.payload;
      })
      .addCase(getQuoteAsync.rejected, (state) => {
        state.state = FETCH_STATE.ERROR;
      });
  },
});

export const { clean } = quoteSlice.actions;

export const getQuoteFromAPI =
  (character: string) => (dispatch: AppDispatch) => {
    dispatch(clean());
    dispatch(getQuoteAsync(character));
  };

export const getQuoteFromState = (state: RootState) => state.quote.data;
export const getStateFromRequest = (state: RootState) => state.quote.state;

export default quoteSlice.reducer;

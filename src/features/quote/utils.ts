import {
  FETCH_STATE,
  INVALID_NAME,
  LOADING_MESSAGE,
  NOT_FOUND,
} from "./constants";

export const getMessage: (
  quote: string,
  reqState: FETCH_STATE
) => string = (quote, reqState) => {
  if (reqState === FETCH_STATE.LOADING) {
    return LOADING_MESSAGE;
  }

  if (reqState === FETCH_STATE.ERROR) {
    return INVALID_NAME;
  }

  return quote ? `${quote}` : NOT_FOUND;
};

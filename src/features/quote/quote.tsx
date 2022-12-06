import { useState } from "react";
import { shallowEqual } from "react-redux";
import * as Styled from "./styled";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getQuoteFromState,
  clean,
  getStateFromRequest,
  getQuoteFromAPI,
} from "./quoteSlice";
import { getMessage } from "./utils";

function Quote() {
  const [inputValue, setInputValue] = useState("");
  const { quote = "", character = "" } =
    useAppSelector(getQuoteFromState, shallowEqual) || {};
  const requestState = useAppSelector(getStateFromRequest);

  const dispatch = useAppDispatch();

  const getQuoteOnClick = () => dispatch(getQuoteFromAPI(inputValue));

  const deleteOnClick = () => {
    dispatch(clean());
    setInputValue("");
  };

  return (
    <Styled.QuoteContainer>
      <Styled.QuoteText>{getMessage(quote, requestState)}</Styled.QuoteText>
      <Styled.QuoteAuthor>{character}</Styled.QuoteAuthor>
      <Styled.Input
        aria-label="Quote Author"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Insert Quote Author name"
      />
      <Styled.Button
        aria-label={inputValue ? "Get Quote" : "Get Quote randomly"}
        onClick={getQuoteOnClick}
      >
        {inputValue ? "Get Quote" : "Get Quote randomly"}
      </Styled.Button>
      <Styled.Button aria-label="Delete" onClick={deleteOnClick} secondary={true}>
        Delete
      </Styled.Button>
    </Styled.QuoteContainer>
  );
}
export default Quote;

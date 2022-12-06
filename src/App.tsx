import React from "react";
import Quote from "./features/quote/quote";
import * as Styled from "./app.styled";
import Bio from "./features/bio/bio";
import News from "./features/news/news";

function App() {
  return (
    <Styled.App>
      <Styled.Header>
        <Styled.Img
          src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG?1497481539770"
          alt="The-Simpsons"
        />
        <Quote />
      </Styled.Header>
      <Styled.Bio>
        <Bio />
      </Styled.Bio>
      <Styled.News>
        <News />
      </Styled.News>
    </Styled.App>
  );
}

export default App;

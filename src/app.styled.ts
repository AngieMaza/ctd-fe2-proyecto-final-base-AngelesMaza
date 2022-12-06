import styled from "styled-components";
import headerImg from "./assets/homer-background.jpg";
import bioImg from "./assets/sky-background.jpg";
import newsImg from "./assets/homer-soap.jpg";

export const App = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: "Homer Simpson Revised", sans-serif;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-image: url(${headerImg});
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 3rem;
  height: 100vh;
`;
export const Img = styled.img`
  width: 300px;
  margin: 1rem;
`;
export const Bio = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px #000;
  background-color: red;
  background-image: url(${bioImg});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 1rem;
`;
export const News = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background-image: url(${newsImg});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 1rem;
`;

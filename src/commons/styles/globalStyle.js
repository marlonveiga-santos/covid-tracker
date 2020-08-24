import { createGlobalStyle } from "styled-components";
import covidImg from "../../assets/images/covid.jpg";

const globalStyle = createGlobalStyle`
* {
outline: none;
box-sizing:border-box;
}
body {
  line-height: normal;
}
html, body {
  width: 100%;
  min-height:100%;
  display: flex;
  padding: 0;
  margin: 0;
}
#root {
  background: url(${covidImg});
  height:100%;
  width:100%;
  background-size:cover;
  background-position: center center;
}
`;

export default globalStyle;

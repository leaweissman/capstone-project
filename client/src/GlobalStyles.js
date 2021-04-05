import { createGlobalStyle } from 'styled-components';
import Elementmain from '../src/assets/1x/Elementmain.png';

export default createGlobalStyle`
:root {
    --primaryblue: #2E56A6;
    --primarygreen: #45BF9D;
    --primaryyellow: #F2B90F;
    --primaryorange: #F2911B;
    --primarypink: #F25C5C;
}

* {
  box-sizing: border-box;
}

body {
  background-image: url(${Elementmain});
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  color: white;
  font-family: sans-serif;
  font-weight: 200;
  font-size: 1.1rem;
  margin: 0;
  padding: 0 0 5rem 0;
}

select,
  input {
    padding: 0.4rem;
    border-radius: 5px;
    font-size: 1.2rem;
  }

  h1, h2, h3, h4 {
    margin: 0;

    
  }
`;

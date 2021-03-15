import { createGlobalStyle } from 'styled-components';
import background from '../src/assets/background.png';

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
    background-image: url(${background});
  color: var(--primarygreen);
  font-family: sans-serif;
  font-size: 1.25rem;
  margin: 0;
  padding: 0%;
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

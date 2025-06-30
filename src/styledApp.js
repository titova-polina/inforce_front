import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Neue Machina', sans-serif;
  margin: 0;
  background-color: #FFFBDE;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  & footer {
    margin-top: auto;
  }
}

a {
  text-decoration: none;
}

button {
  outline: none;
  background: none;
  border: none;
}

ul {
  list-style-type: none;
}

`;

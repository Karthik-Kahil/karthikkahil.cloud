import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --color-white: #ffffff;
    --color-primary: #EDE7DE;
    --color-nav: #F3EEE4;
    --color-nav-text: #4c6763;
    --color-nav-text-trans: #4c676322;
    --color-header-color: #02594E;
    --grid-section-text: #364442;
    --grid-box-1: #D094E5;
    --grid-box-2: #A3DBD4;
    --grid-box-3: #E7B89C;
    --grid-box-4: #BDDFF9;
    --grid-box-5: #99BC85;
    --grid-box-6: #FFBB64;
    --footer-text: #4B6763;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

@font-face {
  font-family: "acorn-regular";
  src:
    url("/assets/acorn-fonts/Acorn-Regular.woff") format("woff");
}

@font-face {
  font-family: "acorn-medium";
  src:
    url("/assets/acorn-fonts/Acorn-Medium.woff") format("woff");
}


@font-face {
  font-family: "acorn-bold";
  src:
    url("/assets/acorn-fonts/Acorn-Bold.woff") format("woff");
}


html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  background-color: var(--color-primary);
}

&::selection {
  background-color: var(--color-header-color);
  color: var(--color-primary);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: #ffffff;
  color: #000000;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-white);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}


a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: none;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;

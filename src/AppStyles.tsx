import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100%;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: "Roboto";
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    overflow-x: hidden;
  }

  html, #root, body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const AppContainer = styled.div`
  width: max(75vw, 300px);
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.3rem;
  border-radius: 15px;
  background-color: white;
  -webkit-box-shadow: 10px 15px 13px -1px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 10px 15px 13px -1px rgba(0, 0, 0, 0.11);
  box-shadow: 10px 15px 13px -1px rgba(0, 0, 0, 0.11);
  gap: 1rem;

  @media (max-width: 510px) {
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
  }
`;

export const ContainerTitle = styled.h1`
  font-size: 1.6rem;
  text-align: center;
`;

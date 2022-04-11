import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-title: #fcfcfe;
    --text-body: #999b9d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
   @media (max-width:1080px) {
      font-size: 93.75%;
    }
    @media (max-width:720px) {
      font-size: 87.5%;
    }
  }
  body {
    color: var(--text-body);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button { 
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--text-title) !important;
  }

  .ant-tabs-ink-bar {
    height: 1px;
    background: #225739 !important;
}
`;
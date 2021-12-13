import { createGlobalStyle } from 'styled-components'

export const GlobalStyle=createGlobalStyle`

*{
      margin: 0;
      padding:0;
      box-sizing:border-box;
      outline:0;

  }

  body{
      background-color:#f0f0f0;
      color:black;  
  }

  body,input,button{
      font-size:16px;
      font-family: 'Roboto Slab', serif;
  }

  h1,h2,h3,h4,h5,h6,strong{
      font-weight:bold;

  }
  button{
      cursor: pointer;
  }
`
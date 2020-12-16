import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background-color .3s;
  }


  .contents {
      margin-top: 15rem;
      margin-left:10rem;
  }


  h2{
    font-size: 3rem;
    font-weight:normal;
    line-height: 1.2;
  }


  .toggleDiv{
    position:absolute;
    right:40px;
    top: 40px;
    display:flex;
    align-items:center;
}  

.icon{
    fill: ${({ theme }) => theme.text};
}


  .switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  
  .switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 45px;
    height: 25px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
    margin-right:8px;
  }

  .themeIcon_sun{
      width: 20px;
      display:inline-block;
  }
  .themeIcon_moon{
    width: 15px;
    display:inline-block;
}
  
  .switch-label .switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 35px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  
  .switch-checkbox:checked + .switch-label .switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  
  .switch-label:active .switch-button {
    width: 60px;
  }


  `;

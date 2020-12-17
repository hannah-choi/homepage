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
    transition: background-color .3s;
  }


  ul, li{
      list-style-type:none;
  }

  .contents {
      width: 100%;
      margin-top: 15rem;
      margin-left: 10rem;
  }

  h2{
    font-size: 3.3rem;
    font-weight:normal;
    line-height: 1.2;
  }

  .introDiv{
    display:flex;
    align-items:center;
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
    background: ${({ theme }) => theme.point};
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
    margin-right:8px;
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

  .mail {
    overflow: hidden;
    position: relative;
    cursor:pointer;
    padding: 5px;
    box-sizing:border-box;
    
    span {
      z-index: 20;
    }

    &:before{
        position: absolute;
        top: -1px;
        height:97%;
        width:100%;
        border-width: 0 0 2px 0;
        border-color:${({ theme }) => theme.point};
        border-style:solid;
        z-index: -15;
        opacity:0;
        content: "";
    }
    
    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: .3;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
  }
  
  .mail:hover {

    color:${({ theme }) => theme.point};

    &:before{
        opacity:1;
        z-index:10;
        transition: border 0.5s ease-in-out;
    }
    
    &:after {
      left: 120%;
      transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  ul.workGallery{
      width:80%;
      display:flex;
      flex-wrap:wrap;
      margin-left: 10rem;
      justify-content:space-between;
      position:relative;
  }
  
  li.workLi{
    overflow: hidden;
      flex-basis:32%;
      margin-top: 20px;

  }

.thumbnail{
    &:after {
        background: #red;
        content: "";
        width: 100%
        height:100%;
        z-index: -10;
        position:absolute;
      }
    margin-bottom: 8px;
}

.thumbnail: hover{
      
    &:after {
        z-index:10;
      } 
  }

  .workLi img{
      width:100%;
  }


  .skills{
      font-family:'mono';
      font-size:0.7rem;
      margin: 5px 5px 5px 0px;
      padding:5px 8px;
      border-radius:3px;
      border:1px solid ${({ theme }) => theme.point};
      color:${({ theme }) => theme.point};

  }

  .skillWrapper{
      margin: 10px 0 5px 0;
  }

  .skillDesc{
      margin-top: 3px;
      font-family:"regular";
      font-size:0.9rem;
  }

  footer{
    position:absolute;
    right: 4rem;
    margin-top: 5rem;
    display: flex;
    align-items:center;
  }


  @media (max-width: 767px) {

    .contents {
        width: 80%;
        margin-top: 50%;
        margin-left: 40px;
    }

    h2{
        font-size:2.8rem;
    }

    ul.workGallery{
        width:80%;
        display:flex;
        flex-wrap:wrap;
        margin-left: 40px;
        justify-content:space-between;
        position:relative;
    }

    li.workLi{
        overflow: hidden;
          flex-basis:100%;
    
          &:before {
            z-index: -10;
          }
    
      }
    
      .workLi: hover{
      
        &:before {
            z-index:-10;
          } 
      }
    
      footer{
        margin-left: 40px;
      }


  }

  `;

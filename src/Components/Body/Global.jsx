import styled from "styled-components"; 


export const ContainerBaseGlobal = styled.div`
width: 100vw;
height: auto; 
display: flex;
justify-content: center;
align-items: center; 
background: rgb(135,138,156);
background: radial-gradient(circle, rgba(135,138,156,1) 0%, rgba(0,0,0,1) 100%);

@media screen and (max-width: 820px) {
  background: rgb(135,138,156);
background: radial-gradient(circle, #444444 0%, #242424 100%);
    height: 100%;
    width: 100%; 
      } 
`;



export const ContainerPrincipalGlobal = styled.div `
width: 95vw;
height: auto;
border-radius: 15px;
background-position: auto;
padding: 15px;  
margin-top: 10px;
margin-bottom: 10px;


@media screen and (max-width: 820px) {
     height: auto;
     width: 100vw;
     padding: 1px;  

      }

`


export const ContainerBodyGlobal = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 80%; 

@media screen and (max-width: 820px) {
       display: flex;
       flex-wrap: wrap;
       border-radius: 10px; 
       margin-top: -130px;
      }
`

export const ContainerDescGlobal = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    font-family: 'Pacifico', cursive; 
    background-color: #7a7a7ab7;
    color: black;
    margin-top: 30px;
    width: 100%;
    height: auto;
    padding: 20px;
    border-radius: 10px;  
    h1 {
        text-align: center; 
    }
    p { 
        margin-top: 30px;
        text-align: center;
        align-items: center;
    }  
   
    @media screen and (max-width: 820px) {
     height: auto;
     padding: 0px;
     background-color: #7a7a7ab7;  

     p  {
      color: white;
     }
      } 

    &.DescHome { 

    .Mob { 
      visibility: hidden;
    }


      @media screen and (max-width: 820px) {
     height: auto;
     width: 100%; 
     padding: 0px;
     padding-top: 10px;
     background-color: transparent;  

     .Desk {
      visibility: hidden;
     }

     .Mob { 
      visibility: visible;
      margin-top: 15%;
    }

    .Mob2 { 
      margin-top: 15%;
      visibility: visible;
    }

      } 
    }

    &.DescKNPV {
    @media screen and (max-width: 820px) {
     height: auto;
     width: 100%; 
     padding: 10px;
      }
   }
`


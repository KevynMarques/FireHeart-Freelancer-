import styled from "styled-components";
import Zeldris from "../Assets/images/Zeldris/Zeldris.jpg" 
import ZeldrisIMG2 from "../Assets/images/Zeldris/ZeldrisIMG2.jpg" 
import ZeldrisIMG3 from "../Assets/images/Zeldris/ZeldrisIMG3.jpg" 
import ZeldrisIMG4 from "../Assets/images/Zeldris/ZeldrisIMG4.jpg" 
import Tessa from "../Assets/images/Tessa/Tessa.jpg" 
import TessaIMG2 from "../Assets/images/Tessa/TessaIMG2.jpg" 
import TessaIMG3 from "../Assets/images/Tessa/TessaIMG3.jpg" 
import TessaIMG4 from "../Assets/images/Tessa/TessaIMG4.jpg"



export const ContainerSVG = styled.div `
   height: 50px;
   display: flex;
   align-items: center;
   margin-top: 50px;

  svg {
      font-size: 40px;
      margin-right: 10px;
    }
  
    p { 
        margin-top: 0px;
        text-align: center;
        align-items: center;
    } 
`


export const ContainerParents = styled.div`
 background-color: #7a7a7ab7;
    color: black;
    margin-top: 30px;
    width:  55%;
    height: 100%;
    padding: 20px;
    border-radius: 10px;  
    display: flex;
    justify-content: space-between;
`

export const ContainerImgLeft = styled.div `
    width: 48%;
    background-image: url(${Zeldris});
    background-size: cover;
    border: solid 5px #3b3b3bb7;
    border-radius: 5px;
    p {
        text-align: center;
        margin-top: 5px;
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
         font-family: 'Pacifico', cursive; 
        font-size: 28px;
    }

`

export const ContainerImgRight = styled.div `
      width: 48%;
    background-image: url(${Tessa});
    background-size: cover;
    border: solid 5px #3b3b3bb7;
    border-radius: 5px;
    p {
        text-align: center;
        margin-top: 5px;
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
         font-family: 'Pacifico', cursive; 
        font-size: 28px;
    }
    
`

 
export const CorpoGaleria = styled.div`
background-color: #000000b5;
width: 100%;
height: 85%;
overflow: auto ;
padding: 10px;
`


export  const ContainerGaleria = styled.div `
width: 100%;
height: 350px; 
background-color: #3b3b3b44;
margin-bottom: 15px ;
display: flex;
justify-content: space-between;
`


export const ContainerTessa = styled.div `
    width: 30%;
    height: 100%;
    background-image: url(${Tessa});
    background-size: cover;
    border: solid 5px #3b3b3bb7;
    border-radius: 5px; 
   p {
        text-align: center;
        margin-top: 5px;
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
         font-family: 'Pacifico', cursive;
         font-weight: bold; 
         font-size: 20px;
   }
`

export const ContainerTessaIMG2 = styled(ContainerTessa) `
 background-image: url(${TessaIMG2});
 margin-left: 20px;
`
    
export const ContainerTessaIMG3 = styled(ContainerTessa) `
 background-image: url(${TessaIMG3});
 margin-left: 20px;
`
    
export const ContainerTessaIMG4 = styled(ContainerTessa) `
 background-image: url(${TessaIMG4});
 margin-left: 20px;
`


export const ContainerZeldris = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${Zeldris});
    background-size: cover;
    border: solid 5px #3b3b3bb7;
    border-radius: 5px; 
    
   p {
        text-align: center;
        margin-top: 5px;
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
         font-family: 'Pacifico', cursive;
         font-weight: bold; 
         font-size: 20px;
   }
`

export const ContainerZeldrisIMG2 = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${ZeldrisIMG2});
    background-size: cover;
    border: solid 5px #3b3b3bb7;
    border-radius: 5px; 
    margin-left: 20px;
`

export const ContainerZeldrisIMG3 = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${ZeldrisIMG3});
    background-size: cover;
    border: solid 5px #3b3b3bb7;
    border-radius: 5px; 
    margin-left: 20px;
`

export const ContainerZeldrisIMG4 = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${ZeldrisIMG4});
    background-size: cover;
    border: solid 5px #3b3b3bb7;
    border-radius: 5px; 
    margin-left: 20px;
`


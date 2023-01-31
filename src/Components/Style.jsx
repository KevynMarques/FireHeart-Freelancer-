import styled from "styled-components";
import Wallpaper from "../Assets/images/fireCity.jpg"
import WallpaperMali from "../Assets/images/MaliFundo.jpg" 
import Zeldris from "../Assets/images/Zeldris.jpg" 
import ZeldrisIMG2 from "../Assets/images/ZeldrisIMG2.jpg" 
import ZeldrisIMG3 from "../Assets/images/ZeldrisIMG3.jpg" 
import ZeldrisIMG4 from "../Assets/images/ZeldrisIMG4.jpg" 
import Tessa from "../Assets/images/Tessa.jpg" 
import TessaIMG2 from "../Assets/images/TessaIMG2.jpg" 
import TessaIMG3 from "../Assets/images/TessaIMG3.jpg" 
import TessaIMG4 from "../Assets/images/TessaIMG4.jpg"
import KNPV from "../Assets/images/MaliKNPV.jpg"



export const ContainerBase = styled.div`
width: 100vw;
height: 100vh; 
background-image: url(${Wallpaper});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`;

export const ContainerPrincipal = styled.div `
width: 80vw;
height: 90vh;
border-radius: 15px;
border: solid 7px  #5f737e;
background-image: url(${WallpaperMali});
background-position: auto;
padding: 15px; 
`

export const ContainerHeader = styled.div`
    width:100%; 
    height:15% ;
    border-bottom: solid 1px #747474;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
` 

export const StyleButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    font-family: 'Pacifico', cursive; 
    width: 150px;
    border:none;
    font-size: 16px;
    background-color: #525252;
    color: #0bddba; 
    border-radius: 10px;
    padding: 10px; 
    cursor: pointer;   
    border: solid 6px  ${props => props.ativo === true ? "#0bddba" : "#0000000"};

    &:Hover {
       border: solid 4px #088b76;
     }   
`


export const ContainerCorpo = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 80%;
`

export const ContainerDescripton = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    font-family: 'Pacifico', cursive; 
    background-color: #7a7a7ab7;
    color: black;
    margin-top: 30px;
    width: 40%;
    height: 100%;
    padding: 20px;
    border-radius: 10px; 
    h1 {
        text-align: center; 
    }
    p {
        text-align: center;
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

export const ImageKNPV = styled.div`
 background-color: #7a7a7ab7;
    margin-top: 30px;
    width:  55%;
    height: 100%;
    padding: 20px;
    border-radius: 10px;   
    background-image: url(${KNPV});
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


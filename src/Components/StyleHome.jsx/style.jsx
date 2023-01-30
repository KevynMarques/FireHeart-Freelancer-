import styled from "styled-components";
import Wallpaper from "../../Assets/images/fireCity.jpg"
import WallpaperMali from "../../Assets/images/MaliFundo.jpg"

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
height: 75vh;
border-radius: 15px;
border: solid 7px  #5f737e;
background-image: url(${WallpaperMali});
background-position: auto;
`

export const ContainerHeader = styled.div`
    width:100%; 
    height:15% ;
    border-bottom: solid 1px #747474;
`
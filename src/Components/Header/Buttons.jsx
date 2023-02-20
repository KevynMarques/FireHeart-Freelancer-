import styled from "styled-components";

export const ButtonsHeader = styled.button`
    width: 150px;
    border:none;
    font-size: 16px;
    background-color: #525252;
    color: #0bddba; 
    border-radius: 10px;
    padding: 10px; 
    cursor: pointer;   
    border: solid 6px  ${props => props.ativo === true ? "#0bddba" : "#0000000"};  

    @media screen and (max-width: 820px) {
        margin-top: 0px;
        margin-bottom: 20px;

      }

    &:Hover {
       border: solid 6px #088b76;
     }     

     &.Home {
       @media screen and (max-width: 820px) {
              visibility: hidden;
            }
         } 

  &.Ninhada {
       @media screen and (max-width: 820px) {
       visibility: hidden;
         }
     }

  &.Galeria {
      @media screen and (max-width: 820px) {
       visibility: hidden;
       position: absolute;
        }
   }


  &.Contato {
      @media screen and (max-width: 820px) {
       visibility: hidden;
       position: absolute;
       }
    }
      
`
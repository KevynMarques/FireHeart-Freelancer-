import styled from "styled-components";
import KNPV from "../../Assets/images/KNPV/MaliKNPV.jpg"
import KNPV2 from "../../Assets/images/KNPV/KNPV.jpg"
import KNPV3 from "../../Assets/images/KNPV/Mali.jpg"
import MaliMobi from "../../Assets/images/KNPV/MaliMobi.jpg"
import HolandesMobi from "../../Assets/images/KNPV/HolandesMobi.jpg"



export const ImageKNPV = styled.div`
    margin-top: 30px; 
    margin-bottom: -70px;

    @media screen and (max-width: 820px) {
        width: 100%;
        height: 350px;
        margin-top: 10%;
        background-image: url(${KNPV}); 
        
      }


   &.KNPV2 {
    width: 100%;
    background-image: url(${KNPV2}); 
    background-size: cover;
    height: 350px;
 
  
    @media screen and (max-width: 820px) {
      height: 250px;
        height: 350px;
        background-image: url(${HolandesMobi}); 

        .Desk {
          visibility: hidden;
        }
        
      }
  } 

  
  &.KNPV3 {
    width: 100%;
    background-image: url(${KNPV3}); 
    background-size: cover;
    height: 350px; 

    @media screen and (max-width: 820px) {
      height: 350px;
      background-image: url(${MaliMobi}); 
      padding: 0px; 

      .Desk {
          visibility: hidden;
        }
        
      }
  }
` 

export const Access = styled.div `
font-family: Arial, Helvetica, sans-serif;
border-top: 2px solid black;
text-align: center;
padding: 20px;
font-size: 20px; 

&.Redes {
   

}


 @media screen and (max-width: 820px) {
        width: 100%;
        height: auto;
        font-size: 16px;
        margin-top: 15%;
        margin-bottom: 10px;
        color: white;
      } 

`
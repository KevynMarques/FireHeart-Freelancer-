import styled from "styled-components";

export const ContainerHeader = styled.div`
    width:100%; 
    height:15% ;
    border-bottom: solid 1px #747474;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 15px; 


    @media screen and (max-width: 820px) {
        visibility: hidden;
      } 
 
` 

export const ContainerHeaderMobile = styled.div` 

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

 h1 {
  font-family: 'Anton', sans-serif;
  text-align: center;
  font-size: 50px;
  color: #0bddba;  
 }  
 
 video{ 
  opacity: 0,1;
 }

 svg {
  visibility: hidden;
 }
   @media screen and (max-width: 820px) { 
    visibility: visible;
   border-bottom: 2px #0bddba;
   margin-top: 5px;
   width: auto;
   border-bottom: solid 1px #0bddba ;
   padding-bottom: 10px;
   margin-left: 10px;
   margin-right: 10px; 
   display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 30px;

 h1 {
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  font-family: 'Anton', sans-serif;
  text-align: center;
  font-size: 30px;
  color: #0bddba;  




 }

 svg {
   color:  #0bddba;
   font-size: 30px;
   visibility: visible;
 }
      } 

 
` 



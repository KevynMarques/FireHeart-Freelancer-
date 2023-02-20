import { useState } from 'react'
import {ButtonsHeader} from "../Components/Header/Buttons"
import { ContainerHeader, ContainerHeaderMobile } from "../Components/Header/Container"
import Home from "../Components/Home/index"
import Ninhadas from '../Components/Ninhada/index'
import Galeria from '../Components/Galeria/index'
import Contato from "../Components/Contato/index"
import { ContainerBaseGlobal,  ContainerPrincipalGlobal } from '../Components/Body/Global'
import { FiAlignJustify } from "react-icons/fi";


export default function Main() {

     const [newState, setNewState] = useState(<Home />)
     const [ativo, setAtivo] = useState("FireHeart")



     return (

          <>
               <ContainerBaseGlobal>
                    <ContainerPrincipalGlobal>  
                         <ContainerHeaderMobile>   
                                 <h1>Canil Fireheart</h1> 
                                  <FiAlignJustify />
                         </ContainerHeaderMobile>  
                         <ContainerHeader> 
                              <ButtonsHeader  className='Home' 
                                   onClick={()=>{
                                     setNewState(<Home />)
                                     setAtivo("FireHeart")    
                                   }}
                                   ativo={ativo === "FireHeart" ? true : false } >
                                 Home
                              </ButtonsHeader>

                              <ButtonsHeader className='Ninhada'
                              onClick={()=>{
                                   setNewState(<Ninhadas />)
                                   setAtivo("ninhada")    
                                 }}
                              ativo={ativo === "ninhada" ? true : false }>
                                   Ninhadas
                              </ButtonsHeader> 

                              <ButtonsHeader className='Galeria' 
                              onClick={()=>{
                                   setNewState(<Galeria />)
                                   setAtivo("Galeria")    
                                 }}
                               ativo={ativo === "Galeria" ? true : false }>
                                   Galeria
                              </ButtonsHeader> 

                              <ButtonsHeader className='Contato'
                              onClick={()=>{
                                   setNewState(<Contato />)
                                   setAtivo("Contato")    
                                 }}
                              ativo={ativo === "Contato" ? true : false }>
                                   Contato
                              </ButtonsHeader>
                         </ContainerHeader>
                         {newState}
                    </ContainerPrincipalGlobal>
               </ContainerBaseGlobal>

          </>
     )
}

import { useState } from 'react'
import { ButtonsHeader, ContainerBase, ContainerHeader, ContainerPrincipal, StyleButton } from '../Components/Style'
import HomeComp from "../Components/HomeComp"
import Ninhadas from '../Components/Ninhadas'
import Galeria from '../Components/Galeria'
import Contato from "../Components/Contato"


export default function Home() {

     const [newState, setNewState] = useState(<HomeComp />)
     const [ativo, setAtivo] = useState("FireHeart")



     return (

          <>
               <ContainerBase>
                    <ContainerPrincipal>
                         <ContainerHeader>
                              <StyleButton  
                                   onClick={()=>{
                                     setNewState(<HomeComp />)
                                     setAtivo("FireHeart")    
                                   }}
                                   ativo={ativo === "FireHeart" ? true : false } >
                                   FireHeart
                              </StyleButton>
                              <StyleButton
                              onClick={()=>{
                                   setNewState(<Ninhadas />)
                                   setAtivo("ninhada")    
                                 }}
                              ativo={ativo === "ninhada" ? true : false }>
                                   Ninhadas
                              </StyleButton>
                              <StyleButton 
                              onClick={()=>{
                                   setNewState(<Galeria />)
                                   setAtivo("Galeria")    
                                 }}
                               ativo={ativo === "Galeria" ? true : false }>
                                   Galeria
                              </StyleButton>
                              <StyleButton
                              onClick={()=>{
                                   setNewState(<Contato />)
                                   setAtivo("Contato")    
                                 }}
                              ativo={ativo === "Contato" ? true : false }>
                                   Contato
                              </StyleButton>
                         </ContainerHeader>
                         {newState}
                    </ContainerPrincipal>
               </ContainerBase>

          </>
     )
}

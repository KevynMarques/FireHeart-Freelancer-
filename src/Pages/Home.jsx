import { useState } from 'react'
import  { ButtonsHeader, ContainerBase, ContainerHeader, ContainerPrincipal } from '../Components/Style'
import HomeComp from "../Components/HomeComp"
import Ninhadas from '../Components/Ninhadas'


export default function Home() { 

const [newState, setNewState] = useState(<HomeComp/>)



const teste = () =>{ 

}
  return ( 
    <>
    <ContainerBase>
      <ContainerPrincipal>
          <ContainerHeader>
             <ButtonsHeader>
                  <button
                   onClick={teste}
                    >FireHeart</button>
             </ButtonsHeader>
             <ButtonsHeader>
                  <button>Ninhadas</button>
             </ButtonsHeader>
             <ButtonsHeader>
                  <button>Galeria</button>
             </ButtonsHeader>
             <ButtonsHeader>
                  <button>Contatos</button>
             </ButtonsHeader>
          </ContainerHeader> 
            {newState}
      </ContainerPrincipal>
    </ContainerBase>
  
    </> 
  )
}

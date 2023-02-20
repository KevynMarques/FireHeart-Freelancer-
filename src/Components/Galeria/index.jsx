import React from 'react'
import { ContainerGaleria, ContainerTessa,
 ContainerTessaIMG2, CorpoGaleria, ContainerTessaIMG3,
  ContainerTessaIMG4, ContainerZeldris, ContainerZeldrisIMG2,  ContainerZeldrisIMG3, ContainerZeldrisIMG4 } from '../Style'

const Galeria = () => {
  return (
    <CorpoGaleria>

      <ContainerGaleria>
        <ContainerTessa>
          <p>Tessa (BRN 26084)</p> 
        </ContainerTessa>
        <ContainerTessaIMG2 />
        <ContainerTessaIMG3 />
        <ContainerTessaIMG4 />
      </ContainerGaleria> 

      <ContainerGaleria>
         <ContainerZeldris> 
         <p>Zeldris (BRN 40678)</p>  
         </ContainerZeldris> 
         <ContainerZeldrisIMG2 />
         <ContainerZeldrisIMG3 />
         <ContainerZeldrisIMG4 />
      </ContainerGaleria>
    </CorpoGaleria>
  )
}

export default Galeria
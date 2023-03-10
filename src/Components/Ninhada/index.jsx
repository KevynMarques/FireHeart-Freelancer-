import React from 'react'
import { ContainerBodyGlobal, ContainerDescGlobal } from '../Body/Global'
import { ContainerImgLeft,
   ContainerImgRight, ContainerParents, } from '../Style'

const Ninhadas = () => {
  return ( 
    <ContainerBodyGlobal>
    <ContainerDescGlobal>
    <h1>Proximas Ninhadas</h1> 
    <p> 
      <br></br>
     Fireheart.dogs vem anunciar a ninhada de
     cães da linhagem do KNPV Macho - Zeldris (BRN 40678) x 
      Fêmea importada da Holanda - Tessa (BRN 26084), ambos os cães com uma ótima caça , 
      bons nervos e excelente mordia. O macho muito grande e agressivo com uma caça absurda 
      e seguro, a fêmea muito segura e dominante.
      Já comprovados como ótimos reprodutores com filhotes titulados em PH2 e IGP 2 e
      filhotes atuando em atividade policiais reais. Uma otima abertura de sangue de dutch headers 
      com musculatura e temperamento diferenciados.
    </p>
    </ContainerDescGlobal>  
    <ContainerParents>
        <ContainerImgLeft><p>Pai</p></ContainerImgLeft>
        <ContainerImgRight><p>Mãe</p></ContainerImgRight>
    </ContainerParents>
    </ContainerBodyGlobal>
  )
}

export default Ninhadas
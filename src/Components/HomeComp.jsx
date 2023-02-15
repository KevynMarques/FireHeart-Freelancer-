import React from 'react'
import { ContainerCorpo, ContainerDescripton, ImageKNPV } from './Style'

const HomeStyle = () => {
  return ( 
    <ContainerCorpo>
    <ContainerDescripton> 
        <h1>Sobre nós</h1>
        <br></br>
        O canil coração de fogo é especializado em cães policiais e cães de 
        proteção com registro BRN da linhagem holandesa do KNPV. Nossa seleção
         é baseada em avaliações e metodologias muito criteriosas pautadas em muita 
         experiência e estudos. Temos como criterios de seleção cães com bons nervos, 
         agressão, caça, qualidade de mordida (genética) e boa morfologia funcional, buscando sempre o 
         melhoramento genético atraves da seleção dos melhores indivíduos. Todos as matrizes 
         e filhotes são registrados no site do KNPV de linhas de sangue oficial 
         (https://www.bloedlijnen.nl/) para melhor controle genético e
          conhecimento dos ancestrais e descendentes.
    </ContainerDescripton> 
      <ImageKNPV />
    </ContainerCorpo> 
  )
} 




export default HomeStyle
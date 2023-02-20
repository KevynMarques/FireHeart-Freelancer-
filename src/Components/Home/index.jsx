import React from 'react'
import { ContainerBodyGlobal,ContainerDescGlobal } from '../Body/Global'
import { Access, ImageKNPV } from './Style'
import { BsWhatsapp } from "react-icons/bs";


const Home = () => {
  return ( 
    <ContainerBodyGlobal>   
      <ContainerDescGlobal className="DescHome"> 
        <h1 className='Desk'>Sobre nós</h1> 
        <ImageKNPV className='KNPV3' />  
        <br></br>
        <p> 
        <h1 className='Mob'>Sobre nós</h1> 
        <br></br>
        O canil coração de fogo é especializado em cães policiais e cães de
        proteção com registro BRN da linhagem holandesa do KNPV. Nossa seleção
        é baseada em avaliações e metodologias muito criteriosas pautadas em muita
        experiência e estudos. Temos como criterios de seleção cães com bons nervos,
        agressão, caça, qualidade de mordida (genética) e boa morfologia funcional, buscando sempre o
        melhoramento genético atraves da seleção dos melhores indivíduos. Todos as matrizes
        e filhotes são registrados no site do KNPV de linhas de sangue oficial
        (https://www.bloedlijnen.nl/) para melhor controle genético e
        conhecimento dos ancestrais e descendentes.</p>
        <br></br> 


        <br></br> 
        <h1 className='Desk'>KNPV</h1> 
      <ImageKNPV className='KNPV2' /> 
        <br></br>
        <p>   
         <h1 className='Mob'>KNPV</h1> 
         <br></br> 
        KNPV significa: "Koninklijke Nederlandse Politiehond Vereniging:, em inglês: Royal Dutch Police Dog Association.
        KNPV I, é o mesmo que PH I (Police Dog I)
        A KNPV foi fundada em 1907 e tem cerca de 10.000 membros na Holanda. A Diretoria do KNPV está sediada em Amersfoort,
        na província de Utrecht. A Holanda (Holanda) está dividida em onze províncias, KNPV também está dividida nas mesmas onze
        províncias. Cada província tem seu próprio conselho e os conselhos de todas as províncias representam todos os membros do
        KNPV nas reuniões do Conselho Diretor do KNPV
        Em abril de 1994, havia 509 clubes KNPV na Holanda, 140 chamarizes certificados e 64 juízes certificados.
        Em 1993, 695 cães obtiveram seu título PH I, 82 cães seu título PH II, 117 cães seu título Objectbewakingshond, 21
        cães seu título Reddingshond e 4 cães seu título Speurhond
        Todos os anos, nos meses de maio, julho e outubro, o KNPV organiza um Teste de Certificação. O Conselho do KNPV e
        o conselho de cada província organizam essas certificações. Se houver cães suficientes, cada província pode ter sua
        própria Certificação em cada um desses meses. É normal que você faça sua Certificação em sua própria Província. Os
        chamarizes e os Juízes são escolhidos pela Diretoria do KNPV. Eles nunca vêm trabalhar na Província em que vivem para
        obter uma Certificação.
        Todos os anos, no mês de junho, os 10 cães com títulos mais altos em Objectbewakingshond, dos últimos
        3 meses em que foram realizadas as Provas de Certificação, serão convidados para o "Objectbewakingshond", Prova Nacional.
        Todos os anos, no primeiro fim de semana de setembro, os 10 cães com títulos mais altos em PH I, dos testes
        de certificação anteriores de maio e julho, são convidados para o PH I, National Trial.
        Todos os anos, no primeiro final de semana do mês de setembro, é realizada a Prova Nacional PH II.
        Cada província seleciona seu representante para ir a esta Prova. O Campeão Nacional PH II do ano
        anterior também é convidado, pelo que no máximo 12 cães concorrem ao Campeonato PH II. Esses testes são
        sempre realizados em Den Bosch.
        Para os programas "Speurhond" e "Reddingshond" o Certificado mais alto do ano torna-se automaticamente Campeão Nacional.</p>
        <br></br>
        <ImageKNPV className='IMGKNPV' /> 
        <br></br>
       <Access>
           <h2>Entre em contato </h2> 
           <p> <BsWhatsapp /> 11 99746-9033</p>
           <p > gMatheusmendesnascimento@gamil.com </p>
           <br></br> 
       </Access>  
      </ContainerDescGlobal>
    </ContainerBodyGlobal>  
  )
}




export default Home
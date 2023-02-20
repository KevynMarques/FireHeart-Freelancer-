import React from 'react'
import { ContainerSVG } from '../Style'
import { BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { ContainerBodyGlobal,ContainerDescGlobal } from "../Body/Global";


const Contato = () => {
  return (
    <ContainerBodyGlobal>
    <ContainerDescGlobal>
        <h1>Contatos :</h1>
        <br></br>
        <ContainerSVG>
           <p> <GoMail /> gMatheusmendesnascimento@gamil.com </p>
        </ContainerSVG>

         <ContainerSVG>
           <BsWhatsapp />
           <p>Celeular e WhatsApp : 11 99746-9033</p>
        </ContainerSVG>
    </ContainerDescGlobal>
    </ContainerBodyGlobal>
  )
}

export default Contato
import React from 'react'
import { ContainerDescripton, ContainerCorpo,ContainerSVG } from './Style'
import { BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Contato = () => {
  return (
    <ContainerCorpo>
    <ContainerDescripton>
        <h1>Contatos :</h1>
        <br></br>
        <ContainerSVG>
           <GoMail />
           <p>gMatheusmendesnascimento@gamil.com</p>
        </ContainerSVG>

         <ContainerSVG>
           <BsWhatsapp />
           <p>Celeular e WhatsApp : 11 99746-9033</p>
        </ContainerSVG>
    </ContainerDescripton>
    </ContainerCorpo>
  )
}

export default Contato
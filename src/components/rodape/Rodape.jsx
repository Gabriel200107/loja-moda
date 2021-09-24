import React from "react"
import styled from 'styled-components';
import icoTel from '../../img/tel.png'
import icoMail from '../../img/mail.png'

const DivRodape = styled.div`
   padding-top:10vh;
   font-size: 15px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   width: 97%;
   max-width: 97%;

   .contato{
      display: flex;
      padding-bottom: 1vh;
   }

   .email{
      display:flex ;
      color:black;
   }
   
   h4{
      padding-bottom: 2vh;
   }

   .icon-css {
      margin-right: 15px;
   }

   .direitos{
      padding-top: 1vh;
   }

`


export default function Rodape() {

   return (
   
      <DivRodape>
        <footer>
            <h4>Contato</h4>
            <div className="contato">
                <img className="icon-css" src={icoTel} alt="Telefone" />
                <p>(11)9 8765-8956</p>
            </div>
            <div className="email">
                <img className="icon-css" src={icoMail} alt="Carta" />
                <p>LojaRoupas@gmail.com</p>
            </div>
            <div  className="direitos">
               <p>Todos os direitos reservados @2021.</p>
            </div>
         </footer>
      </DivRodape>
   
   )}
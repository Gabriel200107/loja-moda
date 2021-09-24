import React from "react"
import styled from 'styled-components';
import imgMasc1 from '../../img/imgMasc1.jpg'
import imgMasc2 from '../../img/imgMasc2.jpg'
import imgMasc3 from '../../img/imgMasc3.jpg'
import imgMasc4 from '../../img/imgMasc4.jpg'




const DivModaMasculina = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 20vh;
      width: 97%;
      max-width: 97%;
      
      .box{
         background-color: #ffffff;
         height: 60vh;
         width: 20vw;
         margin: 1vw;
         font-size: 15px;
         border: solid 0.2vw black;
         
      }

      .img{
         width: 20vw;
         height: 40vh;
      }

      .corletra{
         padding-top: 10px;
         font-size: 13px;
         font-family: Verdana, Geneva, Tahoma, sans-serif;
      }

      .botao-compra {
         padding: 2px;
         margin-top: 10px;
         margin-left: 6.5vw;
         border: none;
         background-color:  #191919;
         color: white;
         font-size: 15px;
   }
   .botao-compra:hover {
      color:  #e6f2f2;
   }
`

export default function ModaMasculina() {

   return (
      <>
         <DivModaMasculina>
   
            <div className="box">
               <figure>
                  <img className="img" src={imgMasc1} />
                  <figcaption className="corletra">Conjunto Masculino Social R$180,00</figcaption>
                  <figcaption className="corletra">Parcelamos até 6x sem juros e 9x com juros </figcaption>
                  <button type="submit" className="botao-compra">Comprar</button>
               </figure>
            </div>

            <div className="box">
               <figure>
                  <img className="img" src={imgMasc2} alt="" />
                  <figcaption className="corletra">Blusa Mascuilina Social 85,00  </figcaption>
                  <figcaption className="corletra">Parcelamos até 4x sem juros e 9x com juros </figcaption>
                  <button type="submit" className="botao-compra">Comprar</button>
               </figure>
            </div>
            <div className="box">
               <figure>
                  <img className="img" src={imgMasc3} alt="" />
                  <figcaption className="corletra">Blusa Mascuilina Social 85,00  </figcaption>
                  <figcaption className="corletra">Parcelamos até 4x sem juros e 9x com juros </figcaption>
                  <button type="submit" className="botao-compra">Comprar</button>
               </figure>
            </div>
            <div className="box">
               <figure>
                  <img className="img" src={imgMasc4} alt="" />
                  <figcaption className="corletra">Blusa Mascuilina Social 85,00  </figcaption>
                  <figcaption className="corletra">Parcelamos até 4x sem juros e 9x com juros </figcaption>
                  <button type="submit" className="botao-compra">Comprar</button>
               </figure>
            </div>


         </DivModaMasculina>
      </>
   )
}
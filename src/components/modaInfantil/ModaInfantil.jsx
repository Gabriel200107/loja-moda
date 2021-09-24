import React from "react"
import styled from 'styled-components';
import imgInfan1 from '../../img/imgInfan1.jpeg'
import imgInfan5 from '../../img/imgInfan5.jpeg'
import imgInfan3 from '../../img/imgInfan3.jpeg'
import imgInfan6 from '../../img/imgInfan6.jpeg'


const DivModaInfantil = styled.div`
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
         border: solid 0.1vw black;
         
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
         cursor: pointer;
   }
   button:hover {
      background-color: #b2b2b2;
      transition-duration: 0.4s;
   }
   

`
export default function ModaInfantil() {

   return (
      <>
         <DivModaInfantil>

            <div className="box">
               <figure>
                  <img className="img" src={imgInfan1} />
                  <figcaption className="corletra">Vestido Infantil 150,00 </figcaption>
                  <figcaption className="corletra">Parcelamos até 5x sem juros e 10x com jutos </figcaption>
                  <button type="submit" value="comprar"  className="botao-compra">Comprar</button>
               </figure>
            </div>

            <div className="box">
               <figure>
                  <img className="img" src={imgInfan5} alt="" />
                  <figcaption className="corletra">Conjunto Masculino 150,00  </figcaption>
                  <figcaption className="corletra">Parcelamos até 4x sem juros e 7x com jutos </figcaption>
                  <button type="submit" value="comprar" className="botao-compra">Comprar</button>
               </figure>
            </div>
            <div className="box">
               <figure>
                  <img className="img" src={imgInfan3} alt="" />
                  <figcaption className="corletra">Vestido Infantil 45,00  </figcaption>
                  <figcaption className="corletra">Parcelamos até 5x sem juros e 2x com jutos </figcaption>
                  <button type="submit" value="comprar" className="botao-compra">Comprar</button>
               </figure>
            </div>
            <div className="box">
               <figure>
                  <img className="img" src={imgInfan6} alt="" />
                  <figcaption className="corletra"> Conjunto Masculino 250,00 </figcaption>
                  <figcaption className="corletra">Parcelamos até 9x sem juros e 14x com juros </figcaption>
                  <button type="submit" value="comprar" className="botao-compra">Comprar</button>
               </figure>
            </div>

         </DivModaInfantil>
      </>
   )
}
import React from "react"
import styled from 'styled-components';
import imgFemin1 from '../../img/imgFemin1.jpeg'
import imgFemin2 from '../../img/imgFemin2.jpeg'
import imgFemin3 from '../../img/imgFemin3.jpeg'
import imgFemin5 from '../../img/imgFemin5.JPG'



const DivModaFeminina = styled.div`
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
export default function ModaFeminina() {
   return (
      <>
         <DivModaFeminina>
            <div className="box">
               <figure>
                  <img className="img" src={imgFemin1} />
                  <figcaption className="corletra">Conjunto Corta Vento R$100,00</figcaption>
                  <figcaption className="corletra">Parcelamos até 4x sem juros e 7x com juros </figcaption>
                  <button type="submit" value="comprar" className="botao-compra">Comprar</button>
               </figure>
            </div>
            <div className="box">
               <figure>
                  <img className="img" src={imgFemin2} alt="" />
                  <figcaption className="corletra">Vestido Preto R$85,00 </figcaption>
                  <figcaption className="corletra">Parcelamos até 2x sem juros e 4x com juros </figcaption>
                  <button type="submit" value="comprar" className="botao-compra">Comprar</button>
               </figure>
            </div>
            <div className="box">
               <figure>
                  <img className="img" src={imgFemin3} alt="" />
                  <figcaption className="corletra">Camiseta Femina R$55,00</figcaption>
                  <figcaption className="corletra">Parcelamos até 3x sem juros e 6x com juros </figcaption>
                  <button type="submit" value="comprar" className="botao-compra">Comprar</button>
               </figure>
            </div>
            <div className="box">
               <figure>
                  <img className="img" src={imgFemin5} alt="" />
                  <figcaption className="corletra"> Conjunto Jade Picon R$950,00 </figcaption>
                  <figcaption className="corletra">Parcelamos até 12x sem juros e 20x com juros </figcaption>
                  <button type="submit" value="comprar"  className="botao-compra">Comprar</button>
               </figure>
            </div>
         </DivModaFeminina>
      </>
   )
}
import React from "react"
import styled from 'styled-components';
import imgAmanda from '../../img/amanda.jpeg'
import imgGabriel from '../../img/gabriel.jpeg'
import imgGuilherme from '../../img/guilherme.jpeg'
import imgHevylle from '../../img/hevylle.jpeg'
import imgNicolas from '../../img/nicolas.jpeg'
import imgVictor from '../../img/victor.jpeg'

const DivSobre = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 20vh;
   
   .box1 {
    background-color: #ffffff;
    height: 33vh;
    width: 10.7vw;
    margin: 1vw;
    font-size: 15px;
    border-radius: 2vw;
    border: solid 0.1vw #00ced1;
    }

    .img1 {
    width: 8vw;
    height: 17vh;
    border-radius: 20vh;
    padding-left: 1vw;

}

.img1:hover{
    width: 9vw;
    height: 19vh;
}

.corletra{
    color: black ;
    font-size: 17px;
}

`
export default function Sobre() {

   return (
      <DivSobre>
          <div className="box1">
                <figure>
                    <img className="img1" src={imgAmanda}alt=""/>
                    <figcaption class="corletra">AMANDA FERNANDES  RM86688 </figcaption>
                </figure>
                
            </div>
            <div className="box1">
                <figure>
                    <img className="img1" src={imgGabriel}/>
                    <figcaption class="corletra">GABRIEL ASSUNÇÃO  RM86675 </figcaption>
                </figure>
            </div>
            <div className="box1">
                <figure>
                    <img className="img1" src={imgGuilherme} alt=""/>
                    <figcaption className="corletra">GUILHERME AUGUSTO  RM86734 </figcaption>
                </figure>
            </div>
            <div className="box1">
                <figure>
                    <img className="img1" src={imgHevylle} alt=""/>
                    <figcaption className="corletra">HEVYLLE DAIANE  RM87248</figcaption>
                </figure>
            </div>
            <div className="box1">
                <figure>
                    <img className="img1" src={imgNicolas} alt=""/>
                    <figcaption className="corletra">NICOLAS TIGLE  RM88468</figcaption>
                </figure>
            </div>
            <div className="box1">
                <figure>
                    <img className="img1" src={imgVictor}/>
                    <figcaption className="corletra">VICTOR RUBEM RM87534 </figcaption>
                </figure>
            </div>
      </DivSobre>
      
   )
}
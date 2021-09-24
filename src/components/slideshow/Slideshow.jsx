import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Img1 from '../../img/ModaFemin.jpg';
import Img2 from '../../img/bannerInfant.png';
import Img3 from '../../img/ModaMasc.jpg';



const DivSlideShow = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 60px;

.each-slide {
  height: 255px
}

 .img2{
   width: 98%;

 }

`


export default function Slideshow() {
  return (

    <DivSlideShow>
      <Slide className="slider">
        <div className="each-slide">
          <div>
            <img src={Img1} alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div>
             <img className="img2" src={Img2} alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={Img3} alt="" />
          </div>
        </div>
      </Slide>
      </DivSlideShow>
  )
}
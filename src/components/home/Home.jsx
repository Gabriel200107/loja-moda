import react from 'react'
import Menu from '../menu/Menu'
import styled from 'styled-components';
import Slideshow from '../slideshow/Slideshow'





const DivHome = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;

      .texto{
          padding-top: 15vh;
      }
      
      .img1{
          width: 100vw;
          height: 50vh;
      }

    
`

export default () => {
    return (
        <>
                <div className="slider">
                    <Slideshow/>
                </div>
            <DivHome>
                <p> A Fashion Look é uma loja onde vendemos roupa masculina, feminina e infantil com um preço acessível para todos, com roupas super
                    linda e na moda, aproveite sempre temos promoção e cupom de desconto. Incentivamos o crescimento do mercado nacional priorizando os
                    fornecedores da Indústria Brasileira e garantimos assim a responsabilidade social em nossa cadeia produtiva.
                    Roupa é o que sabemos fazer de melhor. Por isso, nos dedicamos todos os dias a vestir as pessoas com um produto 100% produzido no
                    Brasil, garantindo a excelência sem abrir mão da responsabilidade na cadeia produtiva. Fazemos com verdade e responsabilidade e assim,
                    acreditamos que é possível levar nossos valores para as pessoas através das nossas peças.</p>
            </DivHome>
        </>
    )
}
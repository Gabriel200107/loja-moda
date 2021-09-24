import react from 'react'
import Menu from '../menu/Menu'
import styled from 'styled-components';





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
    return(
        <DivHome>
           
            
           
            <p> A Fashion Look é uma loja onde vendemos roupa masculina, feminina e infantil com um preço acessível para todos, com roupas super 
            linda e na moda, aproveite sempre temos promoção e cupom de desconto </p>
            
         </DivHome>
    )
}
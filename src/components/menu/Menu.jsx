import {Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import Home from '../home/Home';
import ModaInfantil from '../modaInfantil/ModaInfantil';
import ModaFeminina from '../modaFeminina/ModaFeminina';
import ModaMasculina from '../modaMasculina/ModaMasculina';
import Rodape from '../rodape/Rodape';
import Sobre from '../sobre/Sobre';

const container = styled.div`


`

export default () => {
    return (
        <div id="container">

            <div>
                <Link to='home'>HOME</Link>
                <Link to='modaFeminina'>MODA FEMiNINA</Link>
                <Link to='modaInfantil'>MODA INFANTIL</Link>
                <Link to='modaMasculina'>MODA MASCULINA</Link>
                <Link to='rodape'>RODAPE</Link>
                <Link to='sobre'>SOBRE</Link>
            </div>

                <Route path="/home" component={Home}/>
                <Route path="/modaFemenina" component={ModaFeminina}/>
                <Route path="/modaInfantil" component={ModaInfantil}/>
                <Route path="/ModaMasculina" component={ModaMasculina}/>
                <Route path="/rodape" component={Rodape}/>
                <Route path="/sobre" component={Sobre}/>
        </div>
    )
}
import {Route, Link} from 'react-router-dom'
import styled from 'styled-components';
import Home from '../home/Home';
import ModaInfantil from '../modaInfantil/ModaInfantil';
import ModaFeminina from '../modaFeminina/ModaFeminina';
import ModaMasculina from '../modaMasculina/ModaMasculina';
import Rodape from '../rodape/Rodape';
import Sobre from '../sobre/Sobre';

const DivMenu = styled.div`
    display: inline-block;
    width: 100%;
    max-width: 100%;
    background-color: #00ced1;
    padding: 3vh;
    

    .linkCss {
        text-decoration: none;
        margin-left: 8vw;
        color: black;
    } 

`
export default () => {
    return (
    <>
        <DivMenu>
                <Link className="linkCss" to='home'>HOME</Link>
                <Link className="linkCss" to='modaFeminina'>MODA FEMININA</Link>
                <Link className="linkCss"to='modaInfantil'>MODA INFANTIL</Link>
                <Link className="linkCss" to='modaMasculina'>MODA MASCULINA</Link>
                <Link className="linkCss" to='sobre'>SOBRE</Link>
    

                <Route path="/home" component={Home}/>
                <Route path="/modaFemenina" component={ModaFeminina}/>
                <Route path="/modaInfantil" component={ModaInfantil}/>
                <Route path="/ModaMasculina" component={ModaMasculina}/>
                <Route path="/sobre" component={Sobre}/>
        </DivMenu>
    </>
)}
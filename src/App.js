import React from "react"
import styled from 'styled-components';
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import './App.css'
import Rodape from "./components/rodape/Rodape";

export default function App() {

   return (
      <>
        <Menu/>
        <Rodape/>
      </>
   )
}
import React from 'react';
import './App.css';
import { Body } from './site01/Body';
import { Header } from "./site01/Header";
import {Footer} from "./site01/Footer";
import {NewComponent} from "./site01/NewComponent";

function App() {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

  return (
      <>
        <Header title={'New Header'}/>
        <Body titleForBody={'New Body'}/>
        <Footer titleForFooter={'New Footer'}/>
        <NewComponent cars={topCars}/>
      </>
  );
}

export default App;

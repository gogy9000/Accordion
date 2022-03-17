import React from 'react';
import './App.css';
import {AccordionBody, AccordionTitle} from "./Accordion/AccordionTitle";

function App() {
    console.log('app render')

    const val=12
    const valB=0
    const sum=12
    const valSpan=12


    return (
        <div className="App">
            <AccordionTitle/>
            <AccordionBody selec={true} valSpan={valSpan}  valBold={valB} val={val} sum={sum}/>
        </div>
    );
}

export default App;

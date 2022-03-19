import React from 'react';
import './App.css';
import {Menu} from "./Menu";

function App(props:any) {

    return (
        <div className="App">
            <Menu state={props.state} onSwitch={props.onSwitch} onElement={props.onElement}/>
        </div>
    );
}

export default App;




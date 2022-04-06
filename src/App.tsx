import React from 'react';
import './App.css';
import {Menu} from "./Menu";
import {Statetype} from "./index";


type AppPropsType={
    state: Statetype
    onSwitch:()=>void
    onElement:()=>void
}
function App(props:AppPropsType) {

    return (
        <div className="App">
            <Menu state={props.state}
                  onSwitch={props.onSwitch}
                  onElement={props.onElement}/>
        </div>
    );
}

export default App;




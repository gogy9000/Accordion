import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <Title  />

    </div>
  );
}

export const Title=(props:any)=>{
    return(

    props.boo?<h1>Title</h1>:<h1>notTitle</h1>
    )}

export default App;

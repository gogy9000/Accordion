import React from 'react';
import './App.css';

function App() {

    return (
        <div className="App">
            <Title/>
            <Accordion/>
        </div>
    );
}

export const Title = () => {
    return (

        <h1>notTitle</h1>
    )
}
export const Rating = () => {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>

        </>
    )
}
export const Accordion = () => {
    return (
        <div>
            <Rating/>
        </div>
    )
}
export const Star = () => {
    return (
        <div>
           star
        </div>
    )
}

export default App;

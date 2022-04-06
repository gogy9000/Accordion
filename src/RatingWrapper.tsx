import React, {useState} from 'react';
import './App.module.css';
import {Rating} from "./Rating";


const RatingWrapper = () => {

    let [rating, useRating] = useState(3)


    const useOnClickRatingHandlerUp = () => {
            useRating(rating=rating+1)
    }

    const useOnClickRatingHandlerDown = () => {
        useRating(rating=rating-1)
    }

    return (
        <div className="App">
            <span onClick={useOnClickRatingHandlerDown}>Down</span>
            <Rating rating={rating}/>
            <span onClick={useOnClickRatingHandlerUp}>Up</span>
        </div>
    );
}

export default RatingWrapper;



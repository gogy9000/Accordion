import React, {useState} from 'react';
import './App.module.css';
import {Rating} from "./Rating";


const RatingWrapper = () => {

    let [starValue, useStarValue] = useState(10)
    //это хук с количеством отрисовки звезд
    const useOnClickStarValueHandlerUp = () => useStarValue(starValue=starValue+1)
    // эта щтука слушает кнопку ButtonUpAndDown и прибавляет +1 к состоянию
    const useOnClickStarValueHandlerDown = () =>
        useStarValue(starValue<=1?starValue=starValue-0:starValue=starValue-1)
    //эта штука делает то же самое, только отнимает и придерживается условия ограничения
    // отрицательного состояния
    let [rating, useRating] = useState(5)
    // хук со значением рейтинга
    const useOnClickRatingHandlerUp = (index:number) => useRating(index+1)
    //слушает  onClickRatingHandlerUpdate и меняет состояние на индекс промапленой звезды с корректировкой +1
    return (
        <span className="App">
            <Rating starValue={starValue}
                    rating={rating}
                    onClickRatingHandlerUpdate={useOnClickRatingHandlerUp}
                    useOnClickStarValueHandlerUp={useOnClickStarValueHandlerUp}
                    useOnClickStarValueHandlerDown={useOnClickStarValueHandlerDown}
            />

        </span>
    );
}

export default RatingWrapper;



import React, {useState} from 'react';
import './App.module.css';
import {Rating} from "./Rating";

type RatingWrapperType={
    iconValue:string
    callBackCompleted:()=>void
}

const RatingWrapper:React.FC <RatingWrapperType> = ({iconValue,...props}) => {

    let [rating, useRating] = useState(5)
    // хук со значением рейтинга

    const useOnClickRatingHandlerUp = (index:number) => useRating(index)
    // штука слушает  onClickRatingHandlerUpdate и меняет состояние на индекс промапленой
    // звезды с корректировкой +1


    let [starsValue, useStarsValue] = useState(10)
    //это хук с количеством отрисовки звезд

    const useOnClickStarValueHandlerUp = () => useStarsValue(starsValue=starsValue+1)
    // эта щтука слушает кнопку ButtonUpAndDown и прибавляет +1 к состоянию в starsValue

    const useOnClickStarValueHandlerDown = () =>
        useStarsValue(starsValue<=1?starsValue=starsValue-0:starsValue=starsValue-1)
    //эта штука делает то же самое, только отнимает -1 от starsValue и придерживается условия ограничения
    // отрицательного состояния
    



    return (
        <span className="App">
            <Rating starValue={starsValue}
                    rating={rating}
                    onClickRatingHandlerUpdate={useOnClickRatingHandlerUp}
                    useOnClickStarValueHandlerUp={useOnClickStarValueHandlerUp}
                    useOnClickStarValueHandlerDown={useOnClickStarValueHandlerDown}
                    iconValue={iconValue}
                    callBack={props.callBackCompleted}
            />

        </span>
    );
}

export default RatingWrapper;





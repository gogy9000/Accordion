import React from "react";
// @ts-ignore
import s from './Rating.module.css'
import {MapRating} from "./MapRating";
import {v1} from "uuid";
import {ButtonUpAndDown} from "./ButtonUpAndDown";

type RatingPropsType = {
    starValue: number
    rating: number
    onClickRatingHandlerUpdate: (index:number) => void
    useOnClickStarValueHandlerUp: () => void
    useOnClickStarValueHandlerDown: () => void
}

export const Rating: React.FC<RatingPropsType> = (
    {
        starValue, rating,  onClickRatingHandlerUpdate,
        useOnClickStarValueHandlerUp, useOnClickStarValueHandlerDown
    }
) => {

    let arr = [] as Array<number>
    for (let i = 0; i < starValue; i++) {
        arr = [...arr, i]
    }
    //эта штука создает массив с длинной равной starValue по которому мапится MapRating

    const starMap = arr.map((el, index) => <MapRating key={v1()}
                                                      onClickRatingHandlerUpdate={onClickRatingHandlerUpdate}
                                                      index={index}
                                                      rating={rating}/>)
    //вот здесь мапится MapRating

    return (
        <>
            <ButtonUpAndDown callBackOnClick={useOnClickStarValueHandlerDown} buttonName={'<'}/>
            {/*это просто кнопка, которая жмякает на какой тебе душе угодно колбек и ей можно(нужно)*/}
            {/*присвоить любое имя(buttonName), а еще в ней меняются стили при наведении на нее мыши*/}
            <span>{starMap}</span>
            <ButtonUpAndDown callBackOnClick={useOnClickStarValueHandlerUp} buttonName={'>'}/>
        </>
    )
}


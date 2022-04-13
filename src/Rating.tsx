import React from "react";
// @ts-ignore
import s from './Rating.module.css'
import {MapStars} from "./MapStars";
import {v1} from "uuid";
import {ButtonUpAndDown} from "./ButtonUpAndDown";

type RatingPropsType = {
    starValue: number
    rating: number
    iconValue:string
    onClickRatingHandlerUpdate: (index:number) => void
    useOnClickStarValueHandlerUp: () => void
    useOnClickStarValueHandlerDown: () => void
}

export const Rating: React.FC<RatingPropsType> = (
    {
        starValue, rating,  onClickRatingHandlerUpdate,
        useOnClickStarValueHandlerUp, useOnClickStarValueHandlerDown,
        iconValue
    }
) => {

    let arr = [] as Array<number>
    for (let i = 0; i < starValue; i++) {
        arr = [...arr, i]
    }
    //эта штука создает массив с длинной равной starValue по которому мапится MapStars

    const mapStars = arr.map((el, index) => <MapStars key={v1()}
                                                     onClickRatingHandlerUpdate={onClickRatingHandlerUpdate}
                                                     index={index}
                                                     rating={rating}
                                                      iconValue={iconValue}/>)
    //вот здесь мапится MapStars

    return (
        <>
            <ButtonUpAndDown callBackOnClick={useOnClickStarValueHandlerDown} buttonName={'<'}/>
            {/*это просто кнопка, которая жмякает на какой тебе душе угодно колбек и ей можно(нужно)*/}
            {/*присвоить любое имя(buttonName), а еще в ней меняются стили при наведении на нее мыши*/}
            <span>{mapStars}</span>
            {/*здесь отрисовываэтся промапленые звезды*/}
            <ButtonUpAndDown callBackOnClick={useOnClickStarValueHandlerUp} buttonName={'>'}/>
        </>
    )
}


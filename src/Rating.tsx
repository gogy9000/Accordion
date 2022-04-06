import React from "react";
// @ts-ignore
import s from './Rating.module.css'
import {MapRating} from "./MapRating";

type RatingPropsType = {
    rating: number

}

export const Rating: React.FC<RatingPropsType> = ({rating}) => {

    let arr = [] as Array<number>

    for (let i = 0; i < rating; i++) {
        arr = [...arr, i]
    }

    const starMap = arr.map((el, index) => <MapRating key={index+Math.random()}/>)

    return (
        <div>
            {starMap}
        </div>
    )
}


import React, {useState} from "react";

// @ts-ignore
import s from "./Rating.module.css";



type MapRatingPropsType = {
    key: number
}
export const MapRating: React.FC<MapRatingPropsType> = ({key}) => {

    let [Star, useColorStar] = useState(true)

    const useOnMouseHandler = () => {
        useColorStar(Star ? Star = false : Star = true)
    }

    return (
        <div onMouseEnter={useOnMouseHandler}
             onMouseLeave={useOnMouseHandler}
             className={Star ? s.red : s.blue}
             key={key}
        >
            star
        </div>
    )
}
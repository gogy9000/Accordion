import React, {useState} from "react";

// @ts-ignore
import s from "./Rating.module.css";


type MapRatingType = {
    index: number
    rating: number
    iconValue:string
    onClickRatingHandlerUpdate: (index: number) => void
}


export const MapStars: React.FC<MapRatingType> = ({index, rating,
                                                      iconValue, onClickRatingHandlerUpdate}) => {

    let [onMouseBlink, useColorOnMouse] = useState(false)
    //хук состоянием от которого отталкиваются стили

    const useOnMouseEnterHandler = () => useColorOnMouse(true)
    const useOnMouseLeaveHandler = () => useColorOnMouse(false)
    //эти штуки меняют состояние в хуке при наведении мишки. Почему два а не один?
    // Потому что так не лагает если очень шустро ерзать по ним мышкой

    const onClickHandler = () => {
        onClickRatingHandlerUpdate(index)
    }
    //это колбэк который вызывает колбек при нажатии нажатии на звезду
    // и отдает ей текущий индекс в качестве аргумента, а он там где то наверху присваивается
    // в хуке с рейтингом

    return (
        <>
             <span onClick={onClickHandler}
                   onMouseEnter={useOnMouseEnterHandler}
                   onMouseLeave={useOnMouseLeaveHandler}
                   className={onMouseBlink ? s.MouseEnter : s.MouseLeave}
             >{index < rating ? <b>{iconValue}{' '}</b> : <>{iconValue}{' '}</>}
                 {/*здесь во время мапа сравниватся текущий индекс элемента и значение рейтинга*/}
                 {/*если значение рейтинга выше чем текущий индекс то звезда рендерится жирным шрифтом*/}
                 {/*если нет, то нежирным, все изи*/}

                </span>
        </>

    )
}
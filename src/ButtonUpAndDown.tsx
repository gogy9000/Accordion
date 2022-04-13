import React, {useState} from "react";
// @ts-ignore
import s from "./Rating.module.css";

type ButtonUpAndDownType = {
    callBackOnClick: () => void
    buttonName: string | number | null
}
export const ButtonUpAndDown: React.FC<ButtonUpAndDownType> = ({callBackOnClick, buttonName}) => {

    let [blink, useColorBlink] = useState(false)

    const useOnMouseHandler = () => useColorBlink(blink ? blink = false : blink = true)
    let OnClickHandler = () => callBackOnClick()


    return (
        <>
            <span onClick={OnClickHandler}
                  onMouseEnter={useOnMouseHandler}
                  onMouseLeave={useOnMouseHandler}
                  className={blink ? s.MouseEnter : s.MouseLeave}>{buttonName}</span>
        </>
    )
}
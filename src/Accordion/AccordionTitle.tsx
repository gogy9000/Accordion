import React from "react";
import {Title} from "../Title";
import {Rating} from "../Rating";

export const AccordionBody = (props: any) => {
    console.log('AccordionBody render')
    const arr = []
    if (props.val === undefined) {
        return <div><Rating selec={props.selec}/></div>
    } else {

        for (let i = 0; i < props.valSpan; i++) {
            arr.push(<div><Rating selec={props.selec}
                                  val={props.val-i}
                                  valBold={props.valBold+i}
                                  sum={props.sum}
            /></div>)
        }
        // for (let j = 0; j < props.valBold; j++) {
        //     arr.push(<div><Rating selec={props.selec}
        //                           val={props.val}
        //                           valBold={props.valBold}
        //     /></div>)
        // }
    }
    return <div>{arr}</div>


}
export const AccordionTitle = () => {
    console.log('AccordionTitle render')
    return (
        <div>

            <Title/>

        </div>
    )
}
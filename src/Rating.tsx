import {Star} from "./Star/Star";
import React from "react";

export const Rating = (props:any) => {
    console.log('Rating render')
    if(props.val===undefined){
        return <Star />
    }else {
        const arr=[]
        for(let i=0; i<props.sum-props.valBold;i++ ){

            arr.push(<Star  selec={props.selec} />)

        }
        for(let j=0; j<props.sum-props.val;j++ ){
            arr.push(<Star   />)


        }

        return <div>{arr}</div>
    }

}
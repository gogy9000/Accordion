import React from "react";

export const Star = (props: any) => {
    debugger
    console.log('Star render')
    return (
        props.selec === true ? <span><b>Star</b></span> : <span>Star</span>
    )
}
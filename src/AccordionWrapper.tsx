import {Accordion} from "./Accordion";
import React from "react";
import {TaskType} from "./ToDoBlock";


type AccordionWrapperTaskType={
    tasks:Array<TaskType>
    checkUnCheckTaskCallback:(id:string)=>void
}

export const AccordionWrapper:React.FC<AccordionWrapperTaskType> = ({tasks,checkUnCheckTaskCallback}) => {



    return (
        <>
            <Accordion accordionElement={tasks} checkUnCheckTaskCallback={checkUnCheckTaskCallback}/>
        </>
    )
}
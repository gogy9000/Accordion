import React, {useState} from "react";
import {v1} from "uuid";
import RatingWrapper from "./RatingWrapper";
import {TaskType} from "./App";
// @ts-ignore
import s from './App.module.css'


type AccordionPropsType = {
    accordionElement: Array<TaskType>
    checkUnCheckTaskCallback: (id: string) => void
}
export const Accordion: React.FC<AccordionPropsType> = ({accordionElement, ...props}) => {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    const onClickHandler = () => setCollapsed(collapsed ? false : true)


    const tasksMap = accordionElement.map((task) => {

            const onCheckHandler = () => props.checkUnCheckTaskCallback(task.id)

            return (
                <div key={task.id}>
                    <span className={task.checked ? s.CheckTasks : s.UnCheckTask}>{task.taskName}</span>
                    <input onClick={onCheckHandler} type={"checkbox"} checked={task.checked}/>
                    {/*<div>success</div>*/}
                    <div><RatingWrapper callBackCompleted={()=>alert('completed')} iconValue={'0'}/></div>

                </div>)
        }
    )


    return (
        <div>
            <div>Tasks</div>
            <button onClick={onClickHandler}>menu</button>
            {collapsed && <div>{tasksMap}</div>}
        </div>)

}
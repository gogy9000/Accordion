import React, {useState} from "react";
import RatingWrapper from "./RatingWrapper";
// @ts-ignore
import s from './App.module.css'
import {Button, Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {TaskType} from "./ToDoBlock";


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
                    <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} defaultChecked color="secondary" />
                    {/*<input onClick={onCheckHandler} type={"checkbox"} checked={task.checked}/>*/}
                    {/*<div>success</div>*/}
                    <div><RatingWrapper callBackCompleted={()=>alert('completed')} iconValue={'0'}/></div>

                </div>)
        }
    )


    return (
        <div>
            <div>Tasks</div>
            <Button onClick={onClickHandler} variant="contained">Text</Button>
            {/*<button onClick={onClickHandler}>menu</button>*/}
            {collapsed && <div>{tasksMap}</div>}
        </div>)

}
import React, {useState} from "react";
// @ts-ignore
import s from './App.module.css'
import {AccordionWrapper} from "./AccordionWrapper";
import {v1} from "uuid";

export type TaskType = {
    id: string
    taskName: string
    checked: boolean
}


export const App = () => {
    return (
        <div className={s.App}>
            <ToDoBlock/>

        </div>
    )

}

const ToDoBlock = () => {
    const [tasks, setTasks] = useState<Array<TaskType>>([{
        id: v1(),
        taskName: 'enslave the whole world',
        checked: false
    }])
    const checkUnCheckTaskCallback = (id: string) => {
        setTasks([...tasks.map((task: TaskType) => id === task.id
            ? {
                id: task.id, taskName: task.taskName, checked:
                    task.checked ? false : true
            } : {...task})])
    }
    const addNewTask = (text: string) => {
        if (!text) {
            return
        }
        setTasks([...tasks, {id: v1(), taskName: text, checked: false}])
    }

    const getFilteredTask = (filter: string) => {

        setTasks(filter === 'all' ?
            [...tasks] :
            filter === 'completed' ?
                [...tasks.filter((task: TaskType) => !task.checked)] :
                filter === 'unCompleted' ?
                    [...tasks.filter((task: TaskType) => task.checked)] :
                    tasks
        )
    }
    const clearTasks=()=>setTasks([])

    return(
        <>
            <AccordionWrapper tasks={tasks} checkUnCheckTaskCallback={checkUnCheckTaskCallback} />
        </>
    )

}


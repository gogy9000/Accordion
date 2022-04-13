import React, {useState} from "react";
import {v1} from "uuid";
import RatingWrapper from "./RatingWrapper";



export const Accordion = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false)

    const onClickHandler = () => setCollapsed(collapsed ? false : true)

    const [tasks,setTasks]= useState([{id:v1(),taskName:'enslave the whole world',checked:false}])
    

    const tasksMap= tasks.map((task)=>
        <div key={task.id}>
            <span>{task.taskName}</span>
            <input  type="checkbox" />


            <div><span>0%</span><RatingWrapper iconValue={'()'}/><span>100%</span></div>

        </div>)
    
    return (
        <div>
            <div>Tasks</div>
            <button onClick={onClickHandler}>menu</button>
            {collapsed && <div>{tasksMap}</div>}
        </div>

    )
}
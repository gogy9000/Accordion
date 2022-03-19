import React from "react";
import {Button} from "antd";
import {Statetype} from "./index";

type MenuPropsType={
    state:Statetype
    onSwitch:()=>void
    onElement:()=>void
}

export const Menu = (props: MenuPropsType) => {
    return (
        <div>
            <Accordion state={props.state} onSwitch={props.onSwitch} onElement={props.onElement}/>
        </div>
    )
}


const Accordion = (props: any) => {

    const onMenuItem = () => props.onSwitch()

    const onSubmenuItem = () => props.onElement()


    if (props.state.onOff) {
        return (
            <div>
                <Button onClick={onMenuItem}> Menu </Button>
                <MenuItem state={props.state} onEl={onSubmenuItem}/>
                {props.state.onElem ? <SubmenuItem state={props.state}/> : <></>}
            </div>
        )
    } else {
        return (
            <div>
                <Button onClick={onMenuItem}> Menu </Button>
            </div>
        )
    }
}


const MenuItem = (props: any) => props.state.arrMenu.map((el: any) =>
    <div key={el.id} onClick={props.onEl}>menu item</div>)

const SubmenuItem = (props: any) => props.state.arrMenu.map((el: any) =>
    <div key={el.id} onClick={props.onEl}>submenu item</div>)


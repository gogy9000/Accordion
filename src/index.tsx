import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type arrMenuType={
    id:number
    element:string
}



let store = {
    _rerender() {
        alert('какая то дичь в сторе!')
    },
    _subscribe(observer: any) {
        this._rerender = observer
    },
    getState() {
        return this._state
    },
    _state: {
        arrMenu: [
            {id: 1, element: 'elem1'},
            {id: 2, element: 'elem2'},
            {id: 3, element: 'elem3'},
            {id: 4, element: 'user'},
        ] as Array<arrMenuType>,
        onOff: true,
        onElem: true,
    },

    onSwitch() {
        this.getState().onOff ? this.getState().onOff = false : this.getState().onOff = true
        rerender(store)
    },
    onElement() {
        this.getState().onElem ? this.getState().onElem = false : this.getState().onElem = true
        console.log(this.getState().onElem)
        rerender(store)
    }
}
export type Statetype=typeof store._state
type storeType={
    getState: () =>  void
    onSwitch: () => void
    onElement: () => void
    _state: Statetype



}







export const rerender = (store: storeType) => {


    ReactDOM.render(
        // @ts-ignore
        <App state={store._state}
             onSwitch={store.onSwitch.bind(store)}
             onElement={store.onElement.bind(store)}/>,
        document.getElementById('root')
    );
}

rerender(store)
store._subscribe(rerender)

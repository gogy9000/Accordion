import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


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
        ],
        onOff: true,
        onElem:true,
    },
    onSwitch() {
        this.getState().onOff?this.getState().onOff = false:this.getState().onOff = true
        rerender(store)
    },
    onElement() {
        this.getState().onElem?this.getState().onElem = false:this.getState().onElem = true
        console.log(this.getState().onElem)
        rerender(store)
    }
}




export const rerender = (store: any) => {

    ReactDOM.render(
        <App state={store.getState()}
             onSwitch={store.onSwitch.bind(store)}
             onElement={store.onElement.bind(store)}/>,
        document.getElementById('root')
    );
}
rerender(store)
store._subscribe(rerender)

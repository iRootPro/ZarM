import React from "react";
import ReactDom from "react-dom"
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";


const AppHeader = () => {
    return (
        <h1>Hello, world!</h1>
    );
};

const AppContent = () => {
    const items = ['Windows', 'Mac Os']
    const firstItem = 'Item0'
    const isAuth = false
    return (
        <ul>
            {isAuth ? firstItem : null}
            {items.map(item => <li>{item}</li>)}
        </ul>
    );
};

const AppInput = () => {
    const placeholder = 'Search...'
    return (
        <input type="text" placeholder={placeholder}/>
    )
}

const App = () => {
    return (
        <>
            <HeaderBlock/>
            <AppHeader/>
            <AppContent/>
            <AppInput/>
        </>
    );
};

ReactDom.render(<App/>, document.getElementById('root'))

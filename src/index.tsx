import React from "react";
import ReactDom from "react-dom"


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
            <AppHeader/>
            <AppContent/>
            <AppInput/>
        </>
    );
};

ReactDom.render(<App/>, document.getElementById('root'))

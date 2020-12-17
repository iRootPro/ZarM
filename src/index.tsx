import React from "react";
import ReactDom from "react-dom"


const AppHeader = () => {
    return (
        <h1>Hello, world!</h1>
    );
};

const AppContent = () => {
    return (
        <ul>
            <li>Windows</li>
            <li>Mac OS</li>
        </ul>
    );
};

const App = () => {
    return (
        <>
            <AppHeader/>
            <AppContent/></>
    );
};

ReactDom.render(<App/>, document.getElementById('root'))

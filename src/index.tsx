import React from "react";
import ReactDom from "react-dom"

// const el = React.createElement(
//     "h1",
//     null,
//     "Hello, world!"
// )

const el = <h1>Hello, world!</h1>

ReactDom.render(el, document.getElementById('root'))

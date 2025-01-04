import App from "./app.jsx";
import React from "react";
import ReactDOM from "react-dom";


function MyApp() {
    return (
        <div> 
            <h1>using the react</h1>
        </div>
    );
}


const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'Google'
)

    ReactDOM.createRoot(document.getElementById('root')).render(
        reactElement
)

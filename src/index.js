import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import Projects from "./launch/pages/Projects";
import Connect from "./launch/pages/Connect";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Projects/>,
    },
    {
        path: "/connect",
        element: <Connect/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

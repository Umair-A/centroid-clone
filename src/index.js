import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {ProSidebarProvider} from "react-pro-sidebar";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <ProSidebarProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </ProSidebarProvider>
    </React.StrictMode> 
)




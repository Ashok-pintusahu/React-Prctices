import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, Products } from "./";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"Contact",
        element:<Contact/>
    },
    {
        path:"About",
        element:<About/>
    },
    {
        path:"Products",
        element:<Products/>
    },
    {
        path:"Products/:id",
        element:<Products/>
    },
    {
        path:"*",
        element:<p>Page Not Found</p>
    },
])

export default router;

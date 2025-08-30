import React, { useState, useContext } from "react";
import "./App.css";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;

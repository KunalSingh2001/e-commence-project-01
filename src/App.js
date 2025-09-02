import React, { useState, useContext } from "react";
import "./App.css";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./components/Home/StoreItem";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/store",
            element: <Store />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact-us",
            element: <ContactUs />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;

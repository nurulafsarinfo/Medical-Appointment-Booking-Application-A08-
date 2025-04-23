import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import MyBooking from "../pages/MyBooking/MyBooking";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch("/doctorInfo.json").then(res=> res.json()),
                element: <Home/>,
            },
            {
                path: '/doctorDetails/:id',
                loader: () => fetch("/doctorInfo.json").then(res => res.json()),
                element: <DoctorDetails/>
            },
            {
                path:'//my-booking-data',
                loader: () => fetch("/doctorInfo.json").then(res => res.json()),
                Component: MyBooking
            }


        ]
    },
])
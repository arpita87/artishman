import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Navbar from '../pages/Home/Home/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
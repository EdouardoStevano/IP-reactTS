import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="bg-custom-background w-full h-full">
            <Outlet />
        </div>
    );
};

export default Main;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layouts/Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
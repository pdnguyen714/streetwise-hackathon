import React from 'react';
import { Nav } from '../Nav/Nav';
import { PinList } from '../PinList/PinList';
import { NewPinForm } from '../NewPinForm/NewPinForm';
import './SideBar.css';

export const SideBar = () => {

    return (
        <div className="sideBar">
            <Nav />
            <PinList />
            <NewPinForm />
        </div>
    )
}
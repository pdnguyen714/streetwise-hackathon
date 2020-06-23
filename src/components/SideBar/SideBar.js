import React from 'react';
import { Nav } from '../Nav/Nav';
import { PinList } from '../PinList/PinList';

export const SideBar = () => {

    return (
        <div className="sideBar">
            <h1>Side Bar</h1>
            <Nav />
            <PinList />
        </div>
    )
}
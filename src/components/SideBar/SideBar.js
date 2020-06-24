import React from 'react';
import { Nav } from '../Nav/Nav';
import { PinList } from '../PinList/PinList';
import { NewPinForm } from '../NewPinForm/NewPinForm';
import './SideBar.css';
import SearchBar from '../SearchBar/SearchBar';

export const SideBar = () => {

    return (
        <div className="sideBar">
            <Nav />
            <SearchBar />
            <PinList />
        </div>
    )
}
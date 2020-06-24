import React from 'react';
import './PinListItem.css';

export const PinListItem = (props) => {

    return (
        <div >
            <div className="pinListItem">
                <div className={`circle ${props.pin.type}`}></div>
                <div className='description'>{props.pin.description}</div>
            </div>
            <hr className='hr'/>
        </div>
    )
}


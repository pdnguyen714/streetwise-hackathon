import React from 'react';
import './PinListItem.css';

export const PinListItem = (props) => {

    return (
        <div onMouseOver={() => {
            console.log(props.highlightedPinId, props.pin.id)
            props.setHighlightedPinId(props.pin.id)
        }}>
            <div className={`pinListItem ${props.pin.id === props.highlightedPinId ? 'highlighted' : ''}`}>
                <div className={`circle ${props.pin.type}`}></div>
                <div className='description'>{props.pin.description}</div>
            </div>
            <hr className='hr'/>
        </div>
    )
}


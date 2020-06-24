import React from 'react';
import './PinListItem.css';

export const PinListItem = (props) => {

    return (
        <div className="pinListItem">
            <tr>
                <td>
                    <div className={`circle ${props.pin.type}`}></div>
                    {props.pin.description}
                </td>


            </tr>
        </div>
    )
}


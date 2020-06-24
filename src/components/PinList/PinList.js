import React, { useState, useEffect } from 'react';
import { PinListItem } from '../PinListItem/PinListItem';
import './PinList.css'

export const PinList = (props) => {

//     const [pins, setPins] = useState([])

//     useEffect(() => {
//         const headers = new Headers()
//         fetch(process.env.REACT_APP_API_URL, { headers: headers, method: "GET" })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 setPins(data)
//             })
//     }, [])

    return (
        <div className="pinList">
            {props.pins.length && props.pins.map(pin =>
                <PinListItem pin={pin}/>
            )}

        </div>
    )
}
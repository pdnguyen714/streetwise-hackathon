import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './NewPinForm.css'

export const NewPinForm = (props) => {

    let history = useHistory();
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')

    const addNew = () => {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const pinInfo = {
            description: description,
            type: type,
            longitude: props.lng,
            latitude: props.lat,
        }
        fetch(process.env.REACT_APP_API_URL, {
            headers: headers,
            method: "POST",
            body: JSON.stringify(pinInfo)
        })
            .then(response => response.json())
            .then(data => {
            })
    }

    return (
        <div className='newPinForm'>
            <form>
                <div  className='newPin'>
                    <label>Description</label>
                    <input className='descriptionInput' name='description' onChange={e => {
                        setDescription(e.target.value)
                    }} required pattern='.{2,}' />
                </div>
                <div  className='newPin'>
                    <label>Type</label>
                    <select name='type' onChange={e => { 
                        setType(e.target.value)
                    }}>
                        <option value='protest'>protest</option>
                        <option value='police'>police</option>
                        <option value='other'>other</option>
                    </select>

                </div>
            </form>
            <div className="submit">
                <button className='smallButton' onClick={addNew}>Post</button>
            </div>
        </div>
    )
}
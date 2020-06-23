import React from 'react';
import { useHistory } from 'react-router-dom'

export const NewPinForm = () => {

    let history = useHistory();
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')

    const addNew = () => {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const auditionInfo = {
            descriptions: description,
            type: type,
        }
        fetch(process.env.REACT_APP_API_URL + "pins", {
            headers: headers,
            method: "POST",
            body: JSON.stringify(auditionInfo)
        })
            .then(response => response.json())
            .then(data => {
                history.push('/')
            })
    }

    return (
        <div className='newPinForm'>
            <form>
                <div>
                    <label>Description</label>
                    <input name='description' onChange={e => {
                        setDescription(e.target.value)
                    }} required pattern='.{2,}' />
                </div>
                <div>
                    <label>Type</label>
                    <select name='type' onChange={e => {
                        setType(e.target.value)
                    }}>
                        <option value='protest'>protest</option>
                        <option value='police'>police</option>
                        <option value='other'>other</option>
                        <div className="submit">
                            <Link to='/'><button>Cancel</button></Link>
                            <button className='smallButton' onClick={addNew}>Post</button>
                        </div>
                    </select>
                </div>
            </form>
        </div>
    )
}
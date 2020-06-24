import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Map } from './components/Map/Map.js'
import { SideBar } from './components/SideBar/SideBar';
import Resources from './components/Resources/Resources'


export const App = () => {

    const [highlightedPinId, setHighlightedPinId] = useState()
    const [pins, setPins] = useState([])

    const loadPins = () => {
        const headers = new Headers()
        fetch(process.env.REACT_APP_API_URL, { headers: headers, method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPins(data)
            })
    }

    useEffect(() => {
        loadPins()
    }, [])

    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route path='/' exact>
                        <div className="home">
                            <SideBar pins={pins} highlightedPinId={highlightedPinId} setHighlightedPinId={setHighlightedPinId} />
                            <Map loadPins={loadPins} pins={pins} highlightedPinId={highlightedPinId} setHighlightedPinId={setHighlightedPinId} />
                        </div>
                    </Route>
                    <Route path='/resources' exact>
                        <div>
                            <Resources />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
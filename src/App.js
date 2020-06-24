import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Map } from './components/Map/Map.js'
import { SideBar } from './components/SideBar/SideBar';
import Resources from './components/Resources/Resources'


export const App = () => {


    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route path='/' exact>
                        <div className="home">
                            <SideBar />
                            <Map />
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
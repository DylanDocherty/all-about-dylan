import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Home } from '../home/home.component';
import "../navigation-bar/navigation-bar.style.css";



export const NavigationBar = ({props, handleChange}) => (
    <Router>        
            <div className="navigation-bar">
                <ul className="navigation-list">
                  
                        <li className="navigation-bar-link">
                            <Link to=""></Link>
                        </li>
               
                </ul>
            </div>
        <Switch>
            <Route exact path="/"><Home/></Route>
        </Switch>
    </Router>
);

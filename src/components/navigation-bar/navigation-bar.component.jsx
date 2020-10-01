import React from 'react';
import "../navigation-bar/navigation-bar.style.css";
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../home/home.component';
import { MyWork } from '../my-work/my-work.component';



export const NavigationBar = ({ props, handleChange }) => (
    <Router>
        <div className="navigation-bar">
            <ul className="navigation-list">

                <li className="navigation-bar-link">
                    <Link to="/">About Me</Link>
                </li>
                <li className="navigation-bar-link">
                    <Link to="/my-work">My Work</Link>
                </li>

            </ul>
        </div>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/my-work"><MyWork /></Route>
        </Switch>
    </Router>
);

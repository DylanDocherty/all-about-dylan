import React from 'react';
import "../navigation-bar/navigation-bar.style.css";
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../home/home.component';
import { MyWork } from '../my-work/my-work.component';
import { ContactMe } from '../contact-me/contact-me.component';



export const NavigationBar = ({ props, handleChange }) => (
    <Router>
        <div className="navigation-bar">
                    <Link to="/">About Me</Link>
                    <Link to="/my-work">My Work</Link>
                    <Link to="/contact-me">Contact Me</Link>
            {/* <ul className="navigation-list">

                <li className="navigation-bar-link">
                </li>
                <li className="navigation-bar-link">
                </li>

            </ul> */}
        </div>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/my-work"><MyWork /></Route>
            <Route path="/contact-me"><ContactMe /></Route>

        </Switch>
    </Router>
);

import React, {Component} from 'react';

import { Route, Link } from 'react-router-dom';

import Category from '../Category/Category';
import Starters from '../Category/Courses/Starters/Starters';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="MainClass">
                <nav>   
                    <ul>
                        <li><img src="icon.png" alt="hamburger-icon" /></li>
                        <li><Link to="/">Food App</Link></li>
                        <li><img src="img_avatar.png" alt="Avatar" style={{float: "right", marginRight: "10px", width: "50px", height: "50px", borderRadius: "50%"}} /></li>
                    </ul>
                    <ul>
                        <li>
                            <a>veg</a>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </li>
                        
                        <li>
                            <div className="vl"></div>
                        </li>
                        <li>
                            <a>search</a>
                            <label className="switchImg">
                                <img src="search.svg" alt="search-icon" />
                            </label>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Category} />
                <Route path="/courses/:id" exact component={Starters} />
            </div>
        )
    }
}

export default Main;
import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import './Starters.css';

class Starters extends Component {

    render() {
        return (   
            <div className="Starters">
                <ul>
                    <li><Link to="/"><img src="../back.png" alt="backButton" /></Link></li>
                    <li><a>STARTERS</a></li>
                </ul>


                <div className="Item">
                    <div className="ItemImage">
                        <img src="../1.jpg" alt="Soyabeen" width="100px" height="100px" />
                    </div>
                    <div className="ItemDesc">
                        <p>Soyabeen</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Starters;
import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './Starters.css';

class Starters extends Component {

    cardItemHandler = (id) => {
        console.log(this.props);
        this.props.history.push({pathname: this.props.match.url + '/' + id})
    }

    render() {
        return (   
            <div className="Starters">
                <ul>
                    <li><Link to="/"><img src="../back.png" alt="backButton" /></Link></li>
                    <li><a>STARTERS</a></li>
                </ul>

                {
                    this.props.str.map((el, i) => {
                        const index = i + 1;
                        return (
                            <div className="Item">
                                <div className="ItemImage">
                                    <img src={'../f' + index + '.jpg'} alt={el.name} width="100px" height="110px" />
                                </div>
                                
                                <div className="ItemDesc">
                                    <p>
                                        <img src="../nonVeg.png" alt="nonVeg" width="17px" height="17px" style={{marginRight: "5px"}}/>
                                        <a style={{fontSize: "18px"}}><b>{el.name}</b></a>
                                    </p>
                                    <p style={{fontSize: "13px"}}>
                                        <span>Star({el.star})</span> 
                                        <span>Ratings({el.rating})</span>
                                    </p>
                                    <button className="button button1" style={{borderRadius: "15px", padding: "2px", fontSize: "13px"}}>{el.type}</button>
                                    <p style={{fontSize: "14px"}}>{el.price}</p>
                                </div>

                                <div className="ItemButton">
                                    <button onClick={() => this.cardItemHandler(el.id)} className="button button1"><img src="../plus.png" alt="plusSign" />Add</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        str: state.starter
    }
}

export default connect(mapStateToProps)(Starters);
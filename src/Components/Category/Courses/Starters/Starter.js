import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Starter extends Component {

    state = {
        item: {}
    }

    componentWillMount() {
        const cartItem = this.props.str.filter(el => el.id === this.props.match.params.id)
        this.setState({item: cartItem[0]});
    }

    backClickHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (   
            <div className="Starter">

                <ul>
                    <li><img src="../../close.png" alt="backButton" onClick={this.backClickHandler} /></li>
                </ul>

                <div className="Item">
                    <div className="ItemImage">
                        <img src="../../f1.jpg" alt={this.state.item.name} width="100px" height="110px" />
                    </div>
                    
                    <div className="ItemDesc">
                        <p>
                            <img src="../../nonVeg.png" alt="nonVeg" width="17px" height="17px" style={{marginRight: "5px"}}/>
                            <a style={{fontSize: "18px"}}><b>{this.state.item.name}</b></a>
                        </p>
                        <p style={{fontSize: "13px"}}>
                            <span>Star({this.state.item.star})</span>  
                            <span>Ratings({this.state.item.rating})</span>
                        </p>
                        <button className="button button1" style={{borderRadius: "15px", padding: "2px", fontSize: "13px"}}>{this.state.item.type}</button>
                        <p style={{fontSize: "14px"}}>{this.state.item.price}</p>
                    </div>

                    <div className="ItemButton">
                        <div>
                            <button onClick={() => this.props.onDecrementQuantity(this.state.item.id)} className="Button button1">
                                <img src="../../substract.png" alt="subtractItem" />
                            </button>
                        </div>
                        <div>
                            {this.props.str.filter(el => el.id === this.props.match.params.id)[0].quantity} Qty {this.props.ctr}
                        </div>
                        <div>
                            <button onClick={() => this.props.onIncrementQuantity(this.state.item.id)} className="Button button1">
                                <img src="../../add.png" alt="addItem" />
                            </button>
                        </div>      
                    </div>
                </div>

                <div className="Item" style={{ height: "200px"}}>
                    <div className="description">
                        {this.state.item.description}
                    </div>
                    <div className="note" style={{marginTop: "15px"}}>
                        <p><b>Note to chef</b></p>
                        <textarea rows="3" cols="46"></textarea>
                    </div>
                    <button className="cartButtton">Add to my plate</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        str: state.starter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementQuantity: (index) => dispatch({type: 'INCREMENT', id: index}),
        onDecrementQuantity: (index) => dispatch({type: 'DECREMENT', id: index})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Starter);
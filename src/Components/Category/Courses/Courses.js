import React from 'react';

const Special = (props) => {
    return (
            <div className="card">
                <div className="column">
                    <img src={props.el + '.jpg'} alt={props.el} width="80px" height="60px" />
                </div>
                <div className="column">
                    <p>{props.el}</p>
                </div>
            </div>
    )
}

export default Special;

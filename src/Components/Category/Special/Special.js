import React from 'react';

const Courses = (props) => {
    return (
        <div>
        {
            props.todaySpecial.map((el, index) => {
            const i = index + 1;
            return (
                <div className="gallery" key={i}>
                    <img src={i + '.jpg'} alt={el} width="30px" height="100px" />
                    <div className="desc">{el}</div>
                </div>           
            )}) 
        }   
        </div> 
    )
}

export default Courses;



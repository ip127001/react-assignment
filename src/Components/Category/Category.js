import React, {Component} from 'react';

import Courses from './Courses/Courses';
import Special from './Special/Special';
import { Link } from 'react-router-dom';

import './Category.css';

class Category extends Component {
    state = {
        special: ['White Pasta', 'Shahi Paneer', 'Butter Bread', 'Cheese Pizza'],
        courses: ['starter', 'salad', 'dessert', 'dinner']
    }

    render() {
        const {special, courses} = this.state;

        return (
            <div>
                <div className="Category">
                    <div>
                        <h2>TODAYS SPECIAL</h2>
                    </div>
                    <Special todaySpecial={special} />
                </div>

                <div className="row">
                    <div>
                        <h2>COURSES</h2>
                    </div>
                    {
                        courses.map((element, index) => {
                            return (
                                <Link to={'/courses/' + element} key={index}>
                                    <Courses el={element} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Category;
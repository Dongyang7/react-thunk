import React, {Component} from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return <div className="navMainCntr">
            <div className="navCntr">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List Users</Link>
                    </li>
                    <li>
                        <Link to="/create">Create new user</Link>
                    </li>
                </ul>
            </div>
            <div className="clearb"></div>
        </div>
    }
}

export default Navigation;
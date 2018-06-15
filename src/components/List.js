import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserData} from '../actions/index';

class List extends Component {
    componentDidMount() {
        if(this.props.users.length==0) {
            this.props.dispatch(getUserData());
        }
    }
    render() {
        return <div>
            <h1>User list component</h1>
            {
                (this.props.users && this.props.users.length==0 && (
                    <p>Loading users... Please wait !!!!</p>
                ))
            }
            {
                (this.props.users.length > 0 && (
            <table border="1" cellPadding="5" cellSpacing="5" style={{borderCollapse:'collapse'}}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.map((user, index)=> {
                            return <tr key={index}>
                                <td>{user.userid}</td>
                                <td>{user.username}</td>
                                <td>{user.location}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            ))}
        </div>
    }
}

function mapStateToProps({users}) {
    return {
        users
    };
}

export default connect(mapStateToProps)(List);
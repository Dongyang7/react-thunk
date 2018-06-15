import React, {Component} from 'react';
import serializeForm from 'form-serialize';
import {connect} from 'react-redux';
import {createUser} from '../actions/index';

class Create extends Component {
    createUser = (event) => {
        event.preventDefault();
        var userObj = serializeForm(event.target, {hash:true});
        this.props.dispatch(createUser(userObj));
        this.props.history.push("/list");
    }
    render() {
        return <div>
            <h1>Create User Component</h1>
            <form onSubmit={this.createUser}>
                <table border="1" cellPadding="10" cellSpacing="10" style={{borderCollapse:'collapse'}}>
                    <thead>
                        <tr>
                            <th style={{textAlign:'left'}}>
                                User ID
                            </th>
                            <th>
                                <input type="text" name="userid" placeholder="UserID" />
                            </th>
                        </tr>
                        <tr>
                            <th style={{textAlign:'left'}}>
                                Username
                            </th>
                            <th>
                                <input type="text" name="username" placeholder="Username" />
                            </th>
                        </tr>
                        <tr>
                            <th style={{textAlign:'left'}}>
                                Location
                            </th>
                            <th>
                                <input type="text" name="location" placeholder="Location" />
                            </th>
                        </tr>
                        <tr>
                            <th colSpan="2" style={{textAlign:'left'}}>
                                <button>Create User</button>
                            </th>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
    }
}

export default connect()(Create);
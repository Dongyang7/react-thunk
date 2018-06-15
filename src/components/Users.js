import React, { Component } from 'react';

class Users extends Component {
    render() {
        let props = this.props;
        return <div>
            <h1>Component-Users</h1>
            <ul>
                {
                    props.users.map((item, index)=>{
                        return <li key={index}>{item.name+', '+item.email+' '}
                        <button onClick={()=>props.userRemove(item)}>Remove User</button>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

export default Users;
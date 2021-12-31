import React from 'react';
import UserService from '../services/UserService';
import React, { Component } from 'react';


class userComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }
render(){
    return (
        <div> 
            <h1 className = "text-center">Users List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>User Id</td>
                        <td>User FirstName</td>
                        <td>User LastName</td>
                        <td>User Email Id</td>
                        </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            user=>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.emailId}</td>


                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
}

export default userComponent;
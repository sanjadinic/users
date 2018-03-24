import React, { Component } from 'react';




 class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ users })
            });
    }


    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                    {
                            this.state.users.map((responseData, i) => (
                                <tr key={i}>
                                <td>{responseData.name}</td>
                                <td>{responseData.email}</td>
                                <td>{responseData.phone}</td>
                                <td>{responseData.website}</td>
                            </tr>
                            )
                        )
                    }
                        </tbody>
                </table>
            </div>
            );
    }
}

export default Users;
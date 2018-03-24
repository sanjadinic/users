import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                return response.json();
            })
            .then(comments => {
                this.setState({ comments })
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
                        <th>comment</th>
                    </tr>
                    {
                            this.state.comments.slice(0, 10).map((responseData,i) => (
                                <tr key={i}>
                                <td>{responseData.name}</td>
                                <td>{responseData.email}</td>
                                <td>{responseData.body}</td>
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

export default Comments;

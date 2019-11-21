import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { parse } from 'path';

class Register extends Component {
    state ={
        username: '',
        password: '',
        email: '',
        // isLogged: false
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Handling Register Submit')
        const registerResponse = await fetch(`${process.env.REACT_APP_API_URL}/user/register`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedResponse = await registerResponse.json();
        console.log(parsedResponse, "<---------------------------------register parsed response")
        if (parsedResponse.status.message === 'Success') {
            console.log('Register Success')
            this.props.doUpdateCurrentUser(parsedResponse.data)
            // this.setState({
            //     isLogged: true
            // })
            this.props.history.push('/games')
            console.log(this.state.isLogged, "isLogged")
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Username:</p>
                <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                <p>Password:</p>
                <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                <p>Email:</p>
                <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default withRouter(Register);
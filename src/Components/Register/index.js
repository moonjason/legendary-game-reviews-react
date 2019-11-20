import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Register extends Component {
    state ={
        username: '',
        password: '',
        password2: '',
        email: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Handling Register Submit')
        //fetch user table, post 
        // update current user 
        //this.props.doUpdateCurrentUser(username)
        //this.props.history.push('/dashboard')
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Username:</p>
                <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                <p>Password:</p>
                <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                <p>Confirm Password:</p>
                <input type="password" name="password2" placeholder="Confirm Password" onChange={this.handleChange}/>
                <p>Email:</p>
                <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default withRouter(Register);
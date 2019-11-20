import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
        username: '',
    };

    handleChange = (e) =>{ 
        this.setState({
            username: e.currentTarget.value
        });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Handling Submit to Login')
        // check if user exists in user OR email column of userstable 
        //this.props.doUpdateCurrentUser(data)
        // this.props.history.push('/main')
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <p>Username or E-mail:</p>
                    <input type="text" name="username" placeholder="Username or E-mail" onChange={this.handleChange}/>
                    <p>Password:</p>
                    <input type="password" name="password" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
            </>
        )
    }
}

export default withRouter(Login);
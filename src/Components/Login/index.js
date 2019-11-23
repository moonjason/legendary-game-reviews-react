import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { BackgroundDiv, Form, Box, Btn, Text, Heading } from "./style"

class Login extends Component {
    state = {
        username: '',
        password: '',
        session: {}
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.currentTarget.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Handling Submit to Login')
        const loginIn = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': "application/json"
            }
        })
        console.log(loginIn, "<--------Login")
        const parsedLogin = await loginIn.json()
        console.log(parsedLogin, "<-------parsedLogin")

        if (parsedLogin.status.message === "Success") {
            this.setState({
                session: parsedLogin.session.username
            })
            console.log(this.state, "<--------------------state after login")
            localStorage.setItem('user', JSON.stringify(parsedLogin.session))
            console.log("Login success")
            this.props.doUpdateCurrentUser(parsedLogin.data)
            this.props.history.push('/games')
        }
    }
    render() {
        return (
            <>
                <Heading>Login</Heading>
                <BackgroundDiv>
                    <Form onSubmit={this.handleSubmit}>
                        <Text>Username:</Text>
                        <Box type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                        <Text>Password:</Text>
                        <Box type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                        <Btn type="submit">Login</Btn>
                    </Form>
                </BackgroundDiv>
            </>
        )
    }
}

export default withRouter(Login);
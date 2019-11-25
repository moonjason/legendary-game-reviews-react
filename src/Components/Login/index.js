import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { BackgroundDiv, Form, Box, Btn, Text, Heading, Error } from "./style"

class Login extends Component {
    state = {
        username: '',
        password: '',
        session: {},
        message: ""
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
        const parsedLogin = await loginIn.json()
        if (parsedLogin.status.message === "Success") {
            this.setState({
                session: parsedLogin.session.username
            })
            localStorage.setItem('user', JSON.stringify(parsedLogin.session))
            this.props.doUpdateCurrentUser(parsedLogin.data)
            this.props.history.push('/games')
        } else {
            this.setState({
                message: "Incorrect username or password"
            })
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
                        <Error>
                            <p>{this.state.message}</p>
                        </Error>
                    </Form>
                </BackgroundDiv>
            </>
        )
    }
}

export default withRouter(Login);
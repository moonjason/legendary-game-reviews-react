import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { BackgroundDiv, Form, Box, Btn, Text, Heading, Error } from "./style"


class Register extends Component {
    state ={
        username: '',
        password: '',
        email: '',
        session: {},
        message: ""
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
        if (parsedResponse.status.message === 'Success') {
            this.setState({
                session: parsedResponse.session.username
            })
            localStorage.setItem('user', JSON.stringify(parsedResponse.session))
            this.props.doUpdateCurrentUser(parsedResponse.data)
            this.props.history.push('/games')
        } else {
            this.setState({
                message: "Email or Username already exists"
            })
        }
    }

    render() {
        return (
            <>
                <Heading>Register</Heading>
                <BackgroundDiv>
                    <Form onSubmit={this.handleSubmit}>
                        <Text>Username:</Text>
                        <Box type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                        <Text>Password:</Text>
                        <Box type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                        <Text>Email:</Text>
                        <Box type="email" name="email" placeholder="Email" onChange={this.handleChange} />
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

export default withRouter(Register);

// render() {
//     return (
//         <>
//             <Heading>Login</Heading>
//             <BackgroundDiv>
//                 <Form onSubmit={this.handleSubmit}>
//                     <Text>Username</Text>
//                     <Box type="text" name="username" placeholder="Username" onChange={this.handleChange} />
//                     <Text>Password:</Text>
//                     <Box type="password" name="password" placeholder="Password" onChange={this.handleChange} />
//                     <Text>Email:</Text>
//                     <Box type="email" name="email" placeholder="Email" onChange={this.handleChange} />
//                     <Btn type="submit">Login</Btn>
//                 </Form>
//             </BackgroundDiv>
//         </>
//     )
// }
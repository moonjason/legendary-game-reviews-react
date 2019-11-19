import React from 'react'
import { StyledButton } from './style'

const Button = props => 
    <StyledButton color={props.bgc} size={props.size}>
        {props.action}
    </StyledButton>

export default Button;
    
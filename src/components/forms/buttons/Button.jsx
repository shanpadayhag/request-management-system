import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
    background-color: var(--blue);
    border: none;
    border-radius: 10px;
    height: 38px;
    padding: 0 20px;
    color: #fff;
    margin: 10px;

    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    &:disabled {
        background-color: #75bcff;
        cursor: not-allowed;
    }
`

const Button = ({ children, ...defaultProps }) => {
    return <ButtonComponent {...defaultProps}>{children}</ButtonComponent>
}

export default Button;

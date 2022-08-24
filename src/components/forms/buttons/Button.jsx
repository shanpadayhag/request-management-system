import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
    background-color: var(--blue);
    border: none;
    border-radius: 10px;
    height: 38px;
    padding: 0 20px;
    color: #fff;

    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
`

const Button = ({ children }) => {
    return <ButtonComponent>{children}</ButtonComponent>
}

export default Button;

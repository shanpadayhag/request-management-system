import React from "react";
import styled from "styled-components";

const RadioButtonCustomCheck = styled.span`
    width: 13px;
    height: 13px;
    border-radius: 13px;
    background-color: transparent;
    position: relative;
    left: 0;
    border: 2px solid var(--dark-blue);
`

const RadioButtonContainer = styled.label`
    padding: 0 10px;
    height: 38px;
    flex: 1;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;

    & input:checked + ${RadioButtonCustomCheck} {
        background-color: var(--dark-blue);
    }

    input {
        display: none;
    }
`;

const RadioButtonTitle = styled.strong`
    padding-left: 10px;
`;

const RadioButton = ({ children, ...defaultProps }) => {
    return <RadioButtonContainer>
        <input type="radio" {...defaultProps} readOnly />
        <RadioButtonCustomCheck />
        <RadioButtonTitle>{children}</RadioButtonTitle>
    </RadioButtonContainer>
}

export default RadioButton;

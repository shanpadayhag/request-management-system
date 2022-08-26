import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
    padding: 10px;
    flex: 1;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const CheckboxTitle = styled.strong`
    padding-left: 10px;
`

const Checkbox = ({ children, state, setState, ...defaultProps }) => {
    const updateState = (event) => {
        setState(event.target.value)
    }

    return <CheckboxContainer>
        <input type="checkbox" {...defaultProps} onChange={setState ? updateState : undefined} checked={state} />
        <CheckboxTitle>{children}</CheckboxTitle>
    </CheckboxContainer>;
};

export default Checkbox;

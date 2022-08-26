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

const Checkbox = ({ children, ...defaultProps }) => {
    return <CheckboxContainer>
        <input type="checkbox" {...defaultProps} />
        <CheckboxTitle>{children}</CheckboxTitle>
    </CheckboxContainer>;
};

export default Checkbox;

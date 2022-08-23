import React from "react";
import styled from "styled-components";

const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
    font-size: 14px;
`

const InputFieldLabel = styled.label`
    margin-bottom: 10px;
`

const InputFieldComponentContainer = styled.div`
    position: relative;
`

const InputFieldComponentPlaceholder = styled.label`
    position: absolute;
    width: calc(100% - 20px);
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    pointer-events: none;
    color: #0000006a;
`

const InputFieldComponentLeftBoxIcon = styled.i`
    margin-right: 5px;
`

const InputFieldComponent = styled.input`
    padding: 10px;
    border: none;
    background: #F1F0F6;
    border-radius: 10px;
    width: 100%;
`

const InputField = ({ title, placeholder, leftBoxIcon, containerStyle, ...defaultProps }) => {
    return <InputFieldContainer style={containerStyle}>
        <InputFieldLabel><strong>{title ?? placeholder}</strong></InputFieldLabel>

        <InputFieldComponentContainer>
            <InputFieldComponentPlaceholder>
                {leftBoxIcon ? <InputFieldComponentLeftBoxIcon className={`bx ${leftBoxIcon}`} /> : ''}
                {placeholder}</InputFieldComponentPlaceholder>
            <InputFieldComponent type="text" {...defaultProps} />
        </InputFieldComponentContainer>
    </InputFieldContainer>
}

export default InputField;

import React from "react";
import styled from "styled-components";

const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
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
    padding: ${({ leftBoxIcon = false }) => leftBoxIcon ? '10px 10px 10px 30px' : '10px'};
    border: none;
    background: #F1F0F6;
    border-radius: 10px;
    width: 100%;
    outline: none;
`

const InputField = ({ title, value, setValue, placeholder, leftBoxIcon, containerStyle, ...defaultProps }) => {
    const setStateValue = event => {
        setValue(event.target.value);
    }

    return <InputFieldContainer style={containerStyle}>
        <InputFieldLabel><strong>{title ?? placeholder}</strong></InputFieldLabel>

        <InputFieldComponentContainer>
            {leftBoxIcon
                ? <InputFieldComponentPlaceholder>
                    <InputFieldComponentLeftBoxIcon className={`bx ${leftBoxIcon}`} />
                    {value ? '' : placeholder}</InputFieldComponentPlaceholder>
                : null}
            <InputFieldComponent
                type="text"
                leftBoxIcon={leftBoxIcon}
                placeholder={leftBoxIcon ? '' : placeholder}
                value={value}
                onChange={setStateValue}
                {...defaultProps} />
        </InputFieldComponentContainer>
    </InputFieldContainer>
}

export default InputField;

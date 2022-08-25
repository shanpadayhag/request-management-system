import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButtonContainer = styled.div`
    display: inline-block;
`

const LinkButtonComponent = styled(Link)`
    background-color: var(--blue);
    border: none;
    border-radius: 10px;
    height: 38px;
    padding: 0 20px;
    color: #fff;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
`;

const LinkButton = ({ ...defaultProps }) => {
    return <LinkButtonContainer>
        <LinkButtonComponent {...defaultProps} />
    </LinkButtonContainer>;
};

export default LinkButton;

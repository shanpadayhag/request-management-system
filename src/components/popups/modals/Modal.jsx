import React from "react";
import styled from "styled-components";

const ModalComponent = styled.div`
    position: absolute;
    height: 100%; width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled.div`
    padding: 10px;
    background: #fff;
    border-radius: 10px;
`

const Modal = ({ open, children }) => {

    if (!open) return null;
    return <ModalComponent>
        <ModalContainer>
            {children}
        </ModalContainer>
    </ModalComponent>
}

export default Modal;

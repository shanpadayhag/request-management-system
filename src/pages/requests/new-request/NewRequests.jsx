import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdminPage, Button, InputField, Modal, RadioButton } from "../../../components";

const NewRequestForm = styled.form`
    background: #fff;
    border-radius: 10px;
    padding: 10px;
`

const NewRequestGroupFields = styled.div`
    display: flex;
`

const NewRequestHeaderContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NewRequestDivider = styled.div`
    border-bottom: 1px solid #00000010;
    margin: 40px 40px 20px 40px;
`

const NewRequests = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const BreadCrumb = () => {
        return <>
            <li><Link to="/">Home</Link></li>
            <li className="divider">/</li>
            <li><Link to="/requests">Requests</Link></li>
            <li className="divider">/</li>
            <li><a href="#" className="active">New</a></li>
        </>
    }

    const updateNewRequestFormSubmit = (event) => {
        event.preventDefault();
    }

    return <AdminPage title="New Request" breadCrumb={<BreadCrumb />}>
        <NewRequestForm onSubmit={updateNewRequestFormSubmit}>
            <NewRequestHeaderContainer><h3>Applicant</h3></NewRequestHeaderContainer>
            <NewRequestGroupFields>
                <InputField title="Last Name *" placeholder="Last Name" />
                <InputField title="First Name *" placeholder="First Name" />
                <InputField title="Middle Name" placeholder="Middle Name" />
            </NewRequestGroupFields>

            <NewRequestGroupFields>
                <InputField title="Program *" placeholder="Program" />
                <InputField title="Year Level / Graduated *" placeholder="Year Level / Graduated" />
                <div style={{ flex: 1, padding: '0 10px' }} />
            </NewRequestGroupFields>

            <NewRequestDivider style={{ marginBottom: 0 }} />

            <NewRequestHeaderContainer>
                <h3>Requested Documents</h3>
                <Button style={{ marginRight: 0 }}>Add document</Button>
            </NewRequestHeaderContainer>
            <div id="requestedDocumentsContainer" />
            {/* <NewRequestGroupFields>
                <InputField title="Last Name *" placeholder="Last Name" />
                <InputField title="First Name *" placeholder="First Name" />
                <InputField title="Middle Name *" placeholder="Middle Name" />
            </NewRequestGroupFields> */}

            <NewRequestDivider />

            <NewRequestHeaderContainer>
                <h3>Delivery</h3>
            </NewRequestHeaderContainer>
            <NewRequestGroupFields>
                <RadioButton name="receiveOption" checked>Delivery</RadioButton>
                <RadioButton name="receiveOption">Pickup</RadioButton>
                <div style={{ flex: 1, padding: '0 10px' }} />
            </NewRequestGroupFields>

            <NewRequestDivider style={{ marginBottom: 10 }} />

            <NewRequestHeaderContainer style={{ justifyContent: 'end', }}>
                <Button>Submit</Button>
            </NewRequestHeaderContainer>
        </NewRequestForm>

        <Modal open={isOpen}>

        </Modal>
    </AdminPage>
}

export default NewRequests;

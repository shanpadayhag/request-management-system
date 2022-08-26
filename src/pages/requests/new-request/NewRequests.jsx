import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Auth from "../../../auth/Auth";
import { AdminPage, Button, Checkbox, InputField, Modal, RadioButton } from "../../../components";
import { ObjectHelper } from "../../../helpers";

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
    const [requestedDocList, setRequestDocList] = useState([]);

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

        const data = {};
        const requestedDocInputs = $('input[data-group="rdCreatedInput"]');
        let requestedDocs = ``;

        requestedDocInputs.each(index => {
            const documentInput = $(requestedDocInputs[index]);
            const documentAuthInput = $(`input[data-group="rdCreatedAuthInput"][data-doc-key="${documentInput.data('doc-key')}"]`);

            requestedDocs += `${documentInput.data('doc-key')} [${documentInput.val()}] {${documentAuthInput.val()}} | `
        })

        requestedDocs = requestedDocs.substring(0, requestedDocs.length - 2)
        console.log(requestedDocs)
    }

    const addRequestedDocumentsToModal = requestedDocuments => {
        setRequestDocList(requestedDocuments)
    }

    const getRequestedDocuments = () => {
        const secrets = Auth.getAppsScriptSecrets();

        google.script.run
            .withSuccessHandler(addRequestedDocumentsToModal)
            .getRequestedDocuments(secrets)
    }

    const createInputFieldsForRequestedDocuments = () => {
        toggleModal();

        const checkboxes = $('input[data-group="rdToCreateInput"]:checked');
        const requestedDocumentsContainer = document.getElementById("requestedDocumentsContainer");
        let children = []

        checkboxes.each(index => {
            const inputFieldTitle1 = $(checkboxes[index]).parent().text().trim()

            children.push(<NewRequestGroupFields>
                <InputField
                    data-doc-key={$(checkboxes[index]).data('doc-key')}
                    data-group="rdCreatedInput"
                    defaultValue="1"
                    title={`${inputFieldTitle1} *`}
                    placeholder={inputFieldTitle1} />

                <InputField
                    data-doc-key={$(checkboxes[index]).data('doc-key')}
                    data-group="rdCreatedAuthInput"
                    defaultValue="1"
                    title="Authentication *"
                    placeholder="Authentication" />

                <div style={{ flex: 1, padding: '0 10px' }} />
            </NewRequestGroupFields>)
        })

        const Children = () => <>
            {children.map((value, index) => <div key={index}>
                {value}
            </div>)}
        </>

        ReactDOM.createRoot(requestedDocumentsContainer).render(<Children />);
    }

    useEffect(() => {
        getRequestedDocuments();
    }, [])

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
                <Button style={{ marginRight: 0 }} onClick={toggleModal}>Add document</Button>
            </NewRequestHeaderContainer>

            <div id="requestedDocumentsContainer">
            </div>

            <NewRequestDivider />

            <NewRequestHeaderContainer>
                <h3>Delivery</h3>
            </NewRequestHeaderContainer>
            <NewRequestGroupFields>
                <RadioButton name="receiveOption" checked>Delivery</RadioButton>
                <RadioButton name="receiveOption">Pickup</RadioButton>
                <Checkbox>Scan and Email</Checkbox>
            </NewRequestGroupFields>

            <NewRequestDivider style={{ marginBottom: 10 }} />

            <NewRequestHeaderContainer style={{ justifyContent: 'end', }}>
                <Button>Submit</Button>
            </NewRequestHeaderContainer>
        </NewRequestForm >

        <Modal state={isOpen} setState={setIsOpen} style={{ maxWidth: '600px', width: '100%', maxHeight: '600px', overflowY: 'scroll', paddingBottom: 0, }}>
            <NewRequestHeaderContainer style={{ flexDirection: 'column', gridGap: '10px', alignItems: 'start', marginBottom: '10px' }}>
                <h3>Requested Documents</h3>
                <p style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.5)' }}>Check the documents that are applicable</p>
            </NewRequestHeaderContainer>

            {requestedDocList.map((value, index) => (
                <Checkbox
                    data-group="rdToCreateInput"
                    key={index}
                    data-doc-key={value[0]}>
                    {ObjectHelper.alternativeValueIfEmpty(value[1], value[0])}
                </Checkbox>
            ))}

            <NewRequestHeaderContainer style={{ justifyContent: 'end', padding: '0 0 10px 0', position: 'sticky', bottom: 0, backgroundColor: '#fff' }}>
                <Button style={{ backgroundColor: 'transparent', color: '#000' }} onClick={toggleModal}>Cancel</Button>
                <Button onClick={createInputFieldsForRequestedDocuments}>Add</Button>
            </NewRequestHeaderContainer>
        </Modal>
    </AdminPage >
}

export default NewRequests;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdminPage, Button, DropdownInput, InputField, RadioButton } from "../../../components";

const AllRequestSearchForm = styled.form`
    display: flex;
`;

const AllRequests = () => {
    const searchEntry = (event) => {
        event.preventDefault();
    }

    const BreadCrumb = () => {
        return <>
            <li><Link to="/">Home</Link></li>
            <li className="divider">/</li>
            <li><a href="#" className="active">Requests</a></li>
            <li className="divider">/</li>
            <li><a href="#" className="active">All</a></li>
        </>
    }

    return <AdminPage title="All Requests" breadCrumb={<BreadCrumb />}>
        <AllRequestSearchForm onSubmit={searchEntry}>
            <InputField type="text"
                containerStyle={{ minWidth: 320, width: '100%' }}
                leftBoxIcon="bx-search"
                placeholder="Search for control number or name"
                title="What are you looking for?" />

            <DropdownInput title="Category" className="mark" id="asdf">
                <option label="Control Number">CONTROL NUMBER</option>
                <option label="Name">NAME</option>
            </DropdownInput>

            <DropdownInput title="Category" id="lkj">
                <option label="Test">TEST</option>
            </DropdownInput>

            <div>
                <Button>Search</Button>
            </div>
        </AllRequestSearchForm>

    </AdminPage>
}

export default AllRequests;

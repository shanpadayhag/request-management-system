import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdminPage, Button, InputField, RadioButton } from "../../../components";

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

            <div>
                <RadioButton name="searchOption" data-option="CONTROL NUMBER" checked />
                <span>Control Number</span>
            </div>

            <div>
                <Button>Search</Button>
            </div>
        </AllRequestSearchForm>

    </AdminPage>
}

export default AllRequests;

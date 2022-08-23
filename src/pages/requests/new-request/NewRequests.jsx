import React from "react";
import { Link } from "react-router-dom";
import { AdminPage } from "../../../components";

const NewRequests = () => {
    const BreadCrumb = () => {
        return <>
            <li><Link to="/">Home</Link></li>
            <li className="divider">/</li>
            <li><Link to="/requests">Requests</Link></li>
            <li className="divider">/</li>
            <li><a href="#" className="active">New</a></li>
        </>
    }

    return <AdminPage title="New Request" breadCrumb={<BreadCrumb />}>
    </AdminPage>
}

export default NewRequests;

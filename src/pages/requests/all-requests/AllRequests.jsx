import React from "react";
import { Link } from "react-router-dom";
import { AdminPage } from "../../../components";

const AllRequests = () => {
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
    </AdminPage>
}

export default AllRequests;

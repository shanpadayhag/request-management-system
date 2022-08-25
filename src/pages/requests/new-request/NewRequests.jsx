import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AdminPage, Modal } from "../../../components";

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

    return <AdminPage title="New Request" breadCrumb={<BreadCrumb />}>

        <Modal open={isOpen}>

        </Modal>
    </AdminPage>
}

export default NewRequests;

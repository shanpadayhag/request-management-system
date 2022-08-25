import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AdminPage } from '../../../components';

const ShowRequest = () => {
    const params = useParams();

    const BreadCrumb = () => {
        return <>
            <li><Link to="/">Home</Link></li>
            <li className="divider">/</li>
            <li><Link to="/requests">Requests</Link></li>
            <li className="divider">/</li>
            <li><a href="#" className="active">Show</a></li>
        </>
    }

    return <AdminPage title={`Request #${params.id}`} breadCrumb={<BreadCrumb />}>

    </AdminPage>;
};

export default ShowRequest;

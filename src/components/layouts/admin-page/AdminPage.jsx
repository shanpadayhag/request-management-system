import React from "react";
import styled from "styled-components";

const AdminPageTitle = styled.h1`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
`

const AdminPageBreadCrumb = styled.ul`
    display: flex;
    grid-gap: 6px;

    li, li a {
        font-size: 14px;
    }

    li a {
        color: var(--blue);
    }

    li a.active, li.divider {
        color: var(--dark-grey);
        pointer-events: none;
    }
`

const AdminPageContainer = styled.div`
    width: 100%;
    padding: 24px 20px 20px 20px;
`

const AdminPageContentContainer = styled.div`
    margin-top: 36px;
`

const AdminPage = ({ title, breadCrumb, children }) => {
    return <AdminPageContainer>
        <AdminPageTitle>{title}</AdminPageTitle>
        <AdminPageBreadCrumb>{breadCrumb}</AdminPageBreadCrumb>
        <AdminPageContentContainer>
            {children}
        </AdminPageContentContainer>
    </AdminPageContainer>
}

export default AdminPage
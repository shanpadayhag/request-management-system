import React, { useEffect } from "react";
import styled from "styled-components";
import { SidebarContainer, SidebarDivider } from "../admin-sidebar/AdminSidebar";

const AdminHeaderNav = styled.nav`
    background: #fff;
    height: 64px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    grid-gap: 28px;
    z-index: 100;
`

const AdminHeaderToggleSidebar = styled.i`
    font-size: 18px;
    cursor: pointer;
    margin-right: auto;
`

const AdminHeaderDivider = styled.div`
    width: 1px;
    background: #F1F0F6;
    height: 12px;
    display: block;
`

const AdminHeaderProfile = styled.div`
position: relative;

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }

    .profile-link {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        background: #fff;
        padding: 10px 0;
        box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
        border-radius: 10px;
        width: 160px;
        opacity: 0;
        pointer-events: none;
        transition: all .3s ease;
    }

    .profile-link.show {
        opacity: 1;
        pointer-events: visible;
        top: 100%;
    }

    .profile-link a {
        padding: 10px 16px;
        display: flex;
        grid-gap: 10px;
        font-size: 14px;
        color: #000;
        align-items: center;
        transition: all .3s ease;
    }

    .profile-link a:hover {
        background: #F1F0F6;
    }
`

const AdminHeader = () => {
    const addSidebarToggle = () => {
        const toggleButton = $(`.${AdminHeaderToggleSidebar.styledComponentId}`);
        const sidebarContainer = $(`.${SidebarContainer.styledComponentId}`);
        const sidebarDivider = $(`.${SidebarDivider.styledComponentId}`);

        toggleButton.on('click', () => {
            sidebarContainer.toggleClass('hide')

            if (sidebarContainer.hasClass('hide')) {
                sidebarDivider.text('-')
            } else {
                sidebarDivider.text(sidebarDivider.data('text'))
            }
        })
    }

    useEffect(() => {
        addSidebarToggle()
    }, [])

    return <AdminHeaderNav>
        <AdminHeaderToggleSidebar className='bx bx-menu' ></AdminHeaderToggleSidebar>
        <AdminHeaderDivider></AdminHeaderDivider>
        <AdminHeaderProfile>
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            <ul className="profile-link">
                <li><a href="#"><i className='bx bxs-user-circle icon' ></i> Profile</a></li>
                <li><a href="#"><i className='bx bxs-cog' ></i> Settings</a></li>
                <li><a href="#"><i className='bx bxs-log-out-circle' ></i> Logout</a></li>
            </ul>
        </AdminHeaderProfile>
    </AdminHeaderNav>
};

export default AdminHeader;

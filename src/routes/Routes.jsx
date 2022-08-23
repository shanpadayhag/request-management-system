import React from "react";
import { BrowserRouter, Routes as RoutesContainer, Route, Link } from 'react-router-dom';
import styled from "styled-components";
import { AdminHeader, AdminSidebar } from "../components";
import { AllRequests, Dashboard, NewRequests } from "../pages";

const AdminLayout = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
`

const PagesContainer = styled.div`
    flex: 1;
`

const PagesContentContainer = styled.div`
    overflow-y: scroll;
    height: 100%;
`

const Routes = () => (
    <BrowserRouter>
        <AdminLayout >
            <AdminSidebar />

            <PagesContainer>
                <PagesContentContainer className="overlayScrollBar">
                    <AdminHeader />

                    <RoutesContainer>
                        <Route path="/" element={<Dashboard />} />

                        <Route path="/requests" element={<AllRequests />} />
                        <Route path="/new-request" element={<NewRequests />} />

                        <Route path="/*" element={<Dashboard />} />
                    </RoutesContainer>
                </PagesContentContainer>
            </PagesContainer>
        </AdminLayout>
    </BrowserRouter>
)

export default Routes;

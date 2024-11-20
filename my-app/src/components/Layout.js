// src/components/Layout.js
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { Box, Container } from '@mui/material';
import InventorySummary from './inventory components/InventorySummary';
import InventoryTable from './inventory components/InventoryTable';
import InventoryNav from './InventoryNav';
import './Layout.css'; // Import the CSS file

const Layout = () => {
    const location = useLocation();
    const isInventoryPage = location.pathname === '/' || location.pathname === '/inventory';
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Box className="layout-container">
            <Sidebar open={sidebarOpen} onToggle={handleToggleSidebar} />
         
            <Box className={`content-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <InventoryNav />
                <Container >
               
                    {isInventoryPage ? (
                        <>
                            <TopNav />
                            <InventorySummary />
                            <InventoryTable />
                        </>
                    ) : (
                        <Outlet />
                    )}
                </Container>
            </Box>
        </Box>
    );
};

export default Layout;

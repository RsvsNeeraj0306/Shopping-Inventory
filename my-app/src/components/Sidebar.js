// src/components/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, Drawer } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ open, onToggle }) => {
    const navigate = useNavigate();

    const handleGoToInventory = () => {
        console.log('Navigating to inventory page...');
        navigate('/');
    };

    return (
        <Drawer variant="permanent" open={open}>
            <Box
                sx={{
                    width: open ? 200 : 60,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // Ensures the logout button stays at the bottom
                    backgroundColor: '#ffffff',
                    
                    transition: 'width 0.3s',
                    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
                }}
            >
                <List>
                    <ListItem button onClick={onToggle}>
                        <ListItemIcon>
                            {open ? <CloseIcon /> : <MenuIcon />}
                        </ListItemIcon>
                        {open && <ListItemText primary="Close" />}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Dashboard" />}
                    </ListItem>
                    <ListItem button onClick={handleGoToInventory}>
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Inventory" />}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Users" />}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Settings" />}
                    </ListItem>
                </List>

                <Divider />

                {/* Logout Button at the Bottom */}
                <List>
                    <ListItem button onClick={() => alert('Logout Clicked!')}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Logout" />}
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;

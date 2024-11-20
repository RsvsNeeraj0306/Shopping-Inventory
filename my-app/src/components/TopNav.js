// src/components/TopNav.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const TopNav = () => {
    const navigate = useNavigate();

    const handleAddNewProduct = () => {
        console.log('Navigating to new inventory item page...');
        navigate('/new-inventory-item');
    };

    return (
        <Box display={"flex"} alignItems={"center"} justifyContent="space-between" marginTop={"10px"}>
            <Typography variant="h6" color="inherit" noWrap fontSize='14px'>
                Inventory summary
            </Typography>
            <Button onClick={handleAddNewProduct} variant="contained" color="primary"
                style={{ marginLeft: 'auto', marginRight: '10px', borderRadius: '12px', backgroundColor: '#5570F1', width: '205px', height: '36px', display: 'flex', gap: '10px' }}>
                <AddIcon />
                <Typography variant="h6" color="inherit" noWrap fontSize='12px'>

                    Add New Product
                </Typography>
            </Button>
        </Box>
    );
};

export default TopNav;

// src/components/NewInventoryItem.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import FormSection from './NewInventoryForm';
import UploadImageSection from './NewInventoryUploadImage';

const NewInventoryItem = ({ sidebarOpen }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>

            <Box display={"flex"} justifyContent={"space-between"} alignContent={"center"} sx={{ backgroundColor: '#f5f5f5', marginTop: '10px', width: sidebarOpen ? '10%' : '100%', height: '36px' }}>
                <Typography variant="h5" gutterBottom sx={{ fontSize: '14px', padding: '10px', paddingLeft: '0px' }}>New Inventory Item</Typography>

                <Box display="flex" justifyContent={"center"} sx={{ gap: '24px', width: '356px', height: '36px' }}>
                    <Button variant="contained" color="secondary"
                        sx={{ marginLeft: 'auto', borderRadius: '12px', backgroundColor: '#1C1D22', display: 'flex', gap: '10px', width: '171px', height: '36px' }}>
                        <Typography variant="h6" color="inherit" noWrap fontSize='12px'>Save as Draft</Typography></Button>
                    <Button variant="contained" color="primary"
                        sx={{ marginLeft: 'auto', borderRadius: '12px', backgroundColor: '#5570F1', display: 'flex', gap: '10px', width: '171px', height: '36px' }}>
                        <Typography variant="h6" color="inherit" noWrap fontSize='12px'> Save & Publish</Typography>
                    </Button>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2}}>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '813px', borderRadius: '12px',width: sidebarOpen ? '70%' : '100%' }}>
                    <FormSection />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,  height: '813px', borderRadius: '12px' }}>
                    <UploadImageSection />
                </Box>
            </Box>
        </Box>
    );
};

export default NewInventoryItem;

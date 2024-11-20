// src/components/NewInventoryItem.js
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import FormSection from './NewInventoryForm';
import UploadImageSection from './NewInventoryUploadImage';

const NewInventoryItem = () => {
    return (
        <Box p={4} sx={{ backgroundColor: '#f5f5f5', borderRadius: 5 }}>
            <Typography variant="h5" gutterBottom>New Inventory Item</Typography>
            
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <FormSection />
                </Grid>

                <Grid item xs={4}>
                    <UploadImageSection />
                </Grid>
            </Grid>

            <Box mt={3} display="flex" justifyContent="space-between">
                <Button variant="contained" color="secondary">Save as Draft</Button>
                <Button variant="contained" color="primary">Save & Publish</Button>
            </Box>
        </Box>
    );
};

export default NewInventoryItem;

// src/components/FormSection.js
import React from 'react';
import { Box, TextField, Typography, Grid, Switch, FormControlLabel, InputLabel, Select, MenuItem, FormControl } from '@mui/material';

const FormSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Product Name" fullWidth />
            
            <FormControl fullWidth>
                <InputLabel>Select Product Category</InputLabel>
                <Select label="Select Product Category">
                    <MenuItem value="gadgets">Gadgets</MenuItem>
                    <MenuItem value="fashion">Fashion</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField label="Selling Price" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Cost Price" fullWidth />
                </Grid>
            </Grid>

            <TextField label="Quantity in Stock" type="number" fullWidth />

            <FormControl fullWidth>
                <InputLabel>Order Type</InputLabel>
                <Select label="Order Type">
                    <MenuItem value="single">Single</MenuItem>
                    <MenuItem value="bulk">Bulk</MenuItem>
                </Select>
            </FormControl>

            <Grid container alignItems="center">
                <FormControlLabel control={<Switch />} label="Add Discount" />
                <FormControlLabel control={<Switch />} label="Add Expiry Date" />
            </Grid>

            <TextField label="Short Description" multiline rows={2} fullWidth />
            <TextField label="Product Long Description" multiline rows={4} fullWidth />
            <TextField label="Return Policy" fullWidth />
        </Box>
    );
};

export default FormSection;

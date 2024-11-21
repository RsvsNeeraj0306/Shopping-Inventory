// src/components/FormSection.js
import React from 'react';
import { Box, TextField, Typography, Grid, Switch, FormControlLabel, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { Height } from '@mui/icons-material';

const FormSection = ({ sidebarOpen }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white', gap: 2, padding: '10px', borderRadius: '14px', width: sidebarOpen ? '320px' : '100%' }}>
            <Box display={"flex"} flexDirection={"column"} gap={2} sx={{ width: '100%' }}>
                <TextField sx={{ backgroundColor: '#eff1f9', boxShadow: 'none' }} label="Product Name" fullWidth />

                <FormControl fullWidth sx={{ backgroundColor: '#eff1f9', boxShadow: 'none' }} >
                    <InputLabel>Select Product Category</InputLabel>
                    <Select label="Select Product Category">
                        <MenuItem value="gadgets">Gadgets</MenuItem>
                        <MenuItem value="fashion">Fashion</MenuItem>
                    </Select>
                </FormControl>

                <Box display={"flex"} justifyContent={"space-between"} sx={{ gap: 1 }}>
                    <Box>
                        <TextField sx={{ backgroundColor: '#eff1f9', boxShadow: 'none' }} label="Selling Price" fullWidth />
                    </Box>
                    <Box>
                        <TextField sx={{ backgroundColor: '#eff1f9', boxShadow: 'none' }} label="Cost Price" fullWidth />
                    </Box>
                </Box>

                <TextField label="Quantity in Stock" type="number" fullWidth sx={{ backgroundColor: '#eff1f9', boxShadow: 'none' }} />

                <FormControl fullWidth sx={{ backgroundColor: '#eff1f9', boxShadow: 'none' }} >
                    <InputLabel>Order Type</InputLabel>
                    <Select label="Order Type">
                        <MenuItem value="single">Single</MenuItem>
                        <MenuItem value="bulk">Bulk</MenuItem>
                    </Select>
                </FormControl>

                <Box display="flex" justifyContent="space-between" padding={"10px"}>
                    <FormControlLabel control={<Switch />} label="Add Discount" />
                    <FormControlLabel control={<Switch />} label="Add Expiry Date" />
                </Box>
            </Box>

            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} sx={{ width: '100%' }}>
                <TextField label="Short Description" multiline rows={4} fullWidth sx={{ marginTop: 0, backgroundColor: '#eff1f9', boxShadow: 'none' }} />
                <TextField label="Product Long Description" multiline rows={4} fullWidth sx={{ marginTop: 2, backgroundColor: '#eff1f9', boxShadow: 'none' }} />
                <FormControlLabel control={<Switch />} label="Return Policy" />
                <Box display="flex" flexDirection={'row'} justifyContent="space-between" alignItems={'center'} sx={{ marginTop: 2, gap: 2, width: '100%' }}>
                    <TextField
                        label="Date Added"
                        type="date"
                        fullWidth
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            }
                        }}
                        sx={{ backgroundColor: '#eff1f9', fontFamily: 'Arial, sans-serif', fontSize: '14px', boxShadow: 'none' }}
                    />
                    <TextField
                        label="Time Added"
                        type="time"
                        fullWidth
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            }
                        }}
                        sx={{ backgroundColor: '#eff1f9', fontFamily: 'Arial, sans-serif', fontSize: '14px', boxShadow: 'none' }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default FormSection;

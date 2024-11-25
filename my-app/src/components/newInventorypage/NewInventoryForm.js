// src/components/FormSection.js
import React, { useState } from 'react';
import { Box, TextField, Typography, Switch, FormControlLabel, InputLabel, Select, MenuItem, FormControl } from '@mui/material';


const FormSection = ({ sidebarOpen }) => {
    const [isDiscountEnabled, setIsDiscountEnabled] = useState(false);
    const [isExpiryEnabled, setIsExpiryEnabled] = useState(false);

    const handleDiscountToggle = (event) => {
        setIsDiscountEnabled(event.target.checked);
    };

    const handleExpiryToggle = (event) => {
        setIsExpiryEnabled(event.target.checked);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white', gap: 2, padding: '10px', borderRadius: '14px', width: sidebarOpen ? '320px' : '100%', height: '75%' }}>
            <Box display={"flex"} flexDirection={"column"} gap={2} sx={{ width: '100%' }}>
                <TextField sx={{ backgroundColor: '#eff1f9', boxShadow: 'none' }} label="Product Name" fullWidth />

                <FormControl fullWidth sx={{ backgroundColor: '#eff1f9', boxShadow: 'none', outline: 'none' }} >
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

                <Box display={"flex"} flexDirection={"column"}  >
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} flex={1}  >
                        <Typography fontSize={"16px"} fontWeight={"500px"} color='#8B8D97' width={"68px"} height={"19px"}>
                            Discount</Typography>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width="163.25px">
                            <FormControlLabel control={<Switch checked={isDiscountEnabled} onChange={handleDiscountToggle} />} />
                            <Typography fontSize={"14px"} fontWeight={"400px"}>
                                Add Discount</Typography>
                        </Box>
                    </Box>
                    {isDiscountEnabled && (
                        <Box display={"flex"} flexDirection={"row"} gap={2} mt={2}>
                            
                            <FormControl fullWidth sx={{ backgroundColor: '#eff1f9', boxShadow: 'none' }}>
                                <InputLabel>Discount Type</InputLabel>
                                <Select label="Discount Type">
                                    <MenuItem value="percentage">Percentage</MenuItem>
                                    <MenuItem value="fixed">Fixed Amount</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField label="Discount Value" type="number" fullWidth sx={{ backgroundColor: '#eff1f9', boxShadow: 'none' }} />
                        </Box>
                    )}
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} flex={1}>
                        <Typography fontSize={"16px"} fontWeight={"500px"} color='#8B8D97' width={"88px"} height={"19px"}>
                            Expiry Date</Typography>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                            <FormControlLabel control={<Switch checked={isExpiryEnabled} onChange={handleExpiryToggle}/>} />
                            <Typography fontSize={"14px"} fontWeight={"400px"}>
                               Add Expiry Date</Typography>
                        </Box>
                    </Box>
                    {isExpiryEnabled && (
                        <Box display={"flex"} flexDirection={"row"} gap={2} mt={2}>
                            <TextField
                                label="Expiry Date"
                                type="date"
                                fullWidth
                                defaultValue={"2021-12-12"}
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    }
                                }}
                                sx={{ backgroundColor: '#eff1f9', fontFamily: 'Arial, sans-serif', fontSize: '14px', boxShadow: 'none' }}
                            />
                        </Box>
                    )}
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
                        defaultValue={"2021-12-12"}
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
                        defaultValue="12:00"
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
